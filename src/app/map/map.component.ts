/*
  Copyright 2018 Esri
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { loadModules, loadCss } from 'esri-loader';
import esri = __esri;
import { SharedService } from '../shared.service';
import { PropertyService } from '../property.service';
import {Location} from '@angular/common';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { ActivatedRoute, Router } from '@angular/router';
import '../modernizr.js';
import { MatSnackBar } from '@angular/material';
import { OverlayContainer } from '@angular/cdk/overlay';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Output() mapLoaded = new EventEmitter<boolean>();
  @ViewChild('mapViewNode') private mapViewEl: ElementRef;


  /**
   * @private _zoom sets map zoom
   * @private _center sets map center
   * @private _basemap sets type of map
   */
  private _id: string = '4b3cce57b4dd4efa977d559402ff9fcf';
  private _portalUrl: string = 'https://maps.raleighnc.gov/portal'

  private _zoom: number = 10;
  private _center: Array<number> = [0.1278, 51.5074];
  private _basemap: string = 'streets';
  private _propertyLayer:esri.FeatureLayer;
  private _propertyLabelFields:any[] = [];
  private _planBoundary:esri.FeatureLayer;
  private _inRaleigh:boolean;
  private isTablet:boolean;
  private isHandset:boolean;
  private _layerList:esri.LayerList;
  private _legend:esri.Legend;  
  private _search:esri.widgetsSearch;    
  private _basemapGallery:esri.BasemapGallery;
  private _raleighGroupId:string = 'f2360ebbfe5242a299551e9e7323ef3e';
  private _countyGroupId:string = '2f1f161b96c5406984546432c3d501e1';
  private _compass:esri.Compass;

  private _select:any;
  private _draw:any;
  private _measure:any;  
  private _bookmarks:any;
  private _print:any;

  @Input()
  set zoom(zoom: number) {
    this._zoom = zoom;
  }

  get zoom(): number {
    return this._zoom;
  }

  @Input()
  set center(center: Array<number>) {
    this._center = center;
  }

  get center(): Array<number> {
    return this._center;
  }

  @Input()
  set basemap(basemap: string) {
    this._basemap = basemap;
  }

  get basemap(): string {
    return this._basemap;
  }

  constructor(public shared:SharedService, private property:PropertyService, private router:Router, private route: ActivatedRoute, private location:Location, private snackbar:MatSnackBar, private overlayContainer: OverlayContainer) { 
    window.onpagehide = event => {
      if (!this.shared.clearStorage) {
        let layers = [];
        shared.mapView.getValue().map.allLayers.forEach(layer => {
          if (layer.visible) {
            layers.push(layer.id);
          }
        });
        localStorage.setItem('visibleLayers', layers.toString());      
        localStorage.setItem('extent', JSON.stringify(shared.mapView.getValue().extent.toJSON()));    
        localStorage.setItem('basemap', shared.mapView.getValue().map.basemap.portalItem.id);    
      }
    }
    
  }

  async initializeMap() {
    try {
      const [WebMap, 
        MapView, 
        config, 
        SimpleFillSymbol, 
        Graphic,
        jsonUtils,
        Basemap,
        esriRequest
      ] = await loadModules([
        'esri/WebMap',
        'esri/views/MapView',
        'esri/config',
        'esri/symbols/SimpleFillSymbol', 
        'esri/Graphic',
        "esri/geometry/support/jsonUtils",
        'esri/Basemap',
        'esri/request'
      ]);

      esriRequest('https://maps.raleighnc.gov/arcgis/rest/services/Hosted/GIS_Application_Alerts/FeatureServer/0/query', {
        query: {f:'json',where:"alert='true'", outFields:'*'}, responseType: 'json'
      }).then(response => {
        if (response.data.features.length) {
          let ref = this.snackbar.open(response.data.features[0].attributes.message, 'Dismiss', {
            verticalPosition: 'top',
            panelClass: 'alert-snackbar'});
          ref.onAction().subscribe(()=> {
            ref.dismiss();
          });
        }
      });
      config.portalUrl = this._portalUrl;

      // Set type of map
      const mapProperties: esri.WebMapProperties = {
        portalItem: { 
          id: this._id
        }
      };
      

      const map: esri.WebMap = new WebMap(mapProperties);

      // Set type of map view
      const mapViewProperties: esri.MapViewProperties = {
        container: this.mapViewEl.nativeElement,
        map: map
      };
      if(localStorage.getItem('extent')) {
        mapViewProperties.extent = jsonUtils.fromJSON(JSON.parse(localStorage.getItem('extent'))) as esri.Extent;
      }      

      const mapView: esri.MapView = new MapView(mapViewProperties);
      
      mapView.ui.move([ "zoom"], "bottom-left");        
      


      // All resources in the MapView and the map have loaded.
      // Now execute additional processes
      mapView.when(() => { 
        if (localStorage.getItem('basemap')) {
            mapView.map.basemap = new Basemap({
              portalItem: {
                id: localStorage.getItem('basemap')
              }
            });
        }      
        
        this.shared.rotation.subscribe(rotate => {
          mapView.constraints = {
            rotationEnabled: rotate
          }
          if (rotate) {
            this.addCompass(mapView);
          } else {
            mapView.rotation = 0;
            mapView.ui.remove(this._compass);
          }
        });

        this.groupLayers(mapView);
      
        this.mapLoaded.emit(true);
        mapView.popup.watch('collapsed', collapsed => {
          if (!collapsed) {
            setTimeout(e=> {
            let elms = document.getElementsByClassName('esri-popup__content');
            if (elms.length) {
              disableBodyScroll(elms[0]);
            }
          },2000);
     
          }
        });
        this.addScalebar(mapView);
        this.addTrack(mapView).then(() => {
          this.addFullscreen(mapView).then(() => {
            //this.addClear(mapView);
          });
        });



        this.addExpandWidgets(mapView);
        this.addToolWidgets(mapView);
        this.shared.mapView.next(mapView);
        this.addSelectionLayers(mapView).then((layers) => {

          let multiGraphics = layers[0];
          let singleGraphics = layers[1];

     
          mapView.whenLayerView(singleGraphics).then( singleGraphicsView => {
            mapView.whenLayerView(multiGraphics).then(multiGraphicsView => {
              
              mapView.map.reorder(multiGraphics, mapView.map.allLayers.length - 2);
              mapView.map.reorder(singleGraphics, mapView.map.allLayers.length - 1);

              mapView.map.allLayers.forEach(layer => {
                if (localStorage.getItem('visibleLayers') && layer.type != 'graphics') {
                  if (localStorage.getItem('visibleLayers').split(',').indexOf(layer.id) > -1) {
                    layer.visible = true;
                  } else {
                    layer.visible = false;
                  }
                }
                if (layer.title.indexOf('Property') > -1 && layer.type === 'feature') {
                  mapView.whenLayerView(layer).then((layerView: esri.FeatureLayerView) => {
                    this._propertyLayer = layerView.layer;
                    this.togglePropertyLineColor(mapView.map.basemap);
                    if (this.route.routeConfig) {
                      if (this.route.routeConfig.path === 'pin/:pin' || this.route.routeConfig.path === 'reid/:reid') { 
                        this.route.paramMap.subscribe(params => {
                          let url:string = '';
                        //@ts-ignore
                        mapView.map.tables.forEach(table => {
                          if (table.title.indexOf('Condos') > -1) {
                            url = table.url;
                          }
                        });
                        if (params.get('pin')) {
                          this.property.queryCondos(url, "PIN_NUM IN ('" + params.get('pin') + "')",'PIN_NUM');
                        } else if (params.get('reid')) {
                          this.property.queryCondos(url, "REID IN ('" + params.get('reid') + "')",'REID');
      
                        }
      
                        });  
                      }
                    }            
                    mapView.on('hold', e => {
                      //if (!this.shared.sketchTool.activeTool && !this.shared.selectTool.activeTool) {

                        let geometry = e.mapPoint;
                        this._propertyLayer.queryFeatures({geometry: geometry, returnGeometry: true, outFields: ['OBJECTID']}).then(result => {
                          let oids = [];
                          result.features.forEach(feature => {
                            oids.push(feature.attributes.OBJECTID);
                            
                          });
                          this.shared.propertyIds.next(oids);
        
  
                          this._propertyLayer.queryRelatedFeatures({relationshipId: 0, objectIds: oids, outFields: ['*']}).then(result => {
                            let data = [];
                            oids.forEach(oid => {
                              if (result[oid]) {
                                result[oid].features.forEach(f => {
                                  data.push(f.attributes);
                                });
                              }
                            });
                            
                            this.shared.propertyResults.next(data);
                            if (data.length === 1) {
                              this.shared.propertyInfo.next({attributes: data[0]});
                            } 
                          });
                    
                          });
                     // }
                    });
                    this.shared.propertyIds.subscribe(ids => {
      
                      if (ids.length > 0) {
                        this._propertyLayer.queryFeatures({objectIds: ids, returnGeometry: true, outFields:['*'], outSpatialReference:mapView.spatialReference}).then(results => {
                          mapView.goTo({target: results.features}, {duration: 2000});
                          multiGraphics.removeAll();                 
                          singleGraphics.removeAll();                         
                          (mapView.map.findLayerById('selectGraphics') as esri.GraphicsLayer).removeAll();
                          results.features.forEach(feature => {
                            let g:esri.Graphic = new Graphic();
                            g.geometry = feature.geometry;
                            g.attributes = feature.attributes;
                            let symbol:esri.SimpleFillSymbol = new SimpleFillSymbol(
                            {
                               color: [ 51,51, 204, 0 ],
                               style: "solid",
                               outline: {  // autocasts as new SimpleLineSymbol()   
                                 color: "yellow",
                                 width: 2
                               }
                             });
                             g.symbol = symbol;
                            multiGraphics.add(g);                         
                          });                 
                        })
                      }
                    });
                    this.shared.propertyInfo.subscribe(info => {
                      if (info) {
                        this.location.replaceState('/reid/' + info.attributes.REID);
                        //this.router.navigate(['/pin/' + info.attributes.PIN_NUM]);
                        this.property.getProperties('https://maps.raleighnc.gov/arcgis/rest/services/Property/Property/FeatureServer/1', info.attributes.OBJECTID, 0).subscribe(result => {
                          if (result.relatedRecordGroups[0].relatedRecords.length > 0) {
                            this._propertyLayer.queryFeatures({objectIds: result.relatedRecordGroups[0].relatedRecords[0].attributes.OBJECTID, returnGeometry: true, outFields:['*'], outSpatialReference:mapView.spatialReference}).then(results => {
                              mapView.goTo({target: results.features}, {duration: 2000});

                              if (results.features[0].geometry) {
                                setTimeout(() => {
                                  this.addSingleSelection(results.features[0].clone().geometry, singleGraphics);
                                },500);                                
                              }                              
         
                              this.shared.selectedGraphic.next(results.features[0]);            
                            })                      
                          }
                        });
      
                      }
      
                    })
                  });
                }
              });
            });
          });

        });

 
        mapView.on('layerview-create', event => {

          if (event.layer.title) {
            
          } else {
            
            event.layer.listMode = 'hide';
          }
        });

      });
    } catch (error) {
      console.log('We have an error: ' + error);
    }

  }

  async addSingleSelection(geometry, layer) {

    try {
      const [Graphic] = await loadModules([
        'esri/Graphic'
        ])  
        layer.removeAll();
        layer.add(new Graphic({geometry:geometry, symbol: {
          type: 'simple-fill',
          color: [ 51,51, 204, 0 ],
          style: "solid",
          outline: {  // autocasts as new SimpleLineSymbol()   
            color: "red",
            width: 2
          }
        }}));
        return true;
    } catch (error) {
      console.log('We have an error: ' + error);
      return false;

    }   
  }

  async addSelectionLayers(mapView) {
    try {
      const [GraphicsLayer] = await loadModules([
        'esri/layers/GraphicsLayer'
        ])  
        let multiGraphics:esri.GraphicsLayer = new GraphicsLayer({title: 'multiGraphics', listMode: 'hide'});
        let singleGraphics:esri.GraphicsLayer = new GraphicsLayer({title: 'singleGraphics', listMode: 'hide'});
        
        mapView.map.addMany([multiGraphics, singleGraphics]);
        return [multiGraphics, singleGraphics];
    } catch (error) {
      console.log('We have an error: ' + error);
      return false;

    }
  }

  addTooltips(mapView, Graphic) {
    mapView.on('pointer-move', event => {
      mapView.hitTest(event).then(e => {
        let features = e.results.filter(result => result.graphic.layer.title === 'multiGraphics');
        if (features.length) {
          let feature = features[0].graphic;
          console.log(feature.attributes.OWNER);
          let g = new Graphic({geometry: features[0].mapPoint, attributes:feature.attributes, symbol: {
            type: "text",  // autocasts as new TextSymbol()
            color: "white",
            haloColor: "black",
            haloSize: "1px",
            text: feature.attributes.SITE_ADDRESS+'\n'+feature.attributes.OWNER,
            xoffset: 3,
            yoffset: 3,
            font: {  // autocast as new Font()
              size: 8,
              family: "sans-serif",
              weight: "bold"
            }
          }});
          mapView.graphics.removeAll();
          mapView.graphics.add(g);
        } else {
          mapView.graphics.removeAll();
        }
      });
    });    
  }

  togglePropertyLineColor = basemap => {
    let color:string = 'black';
    if (basemap.title.indexOf('Imagery') > -1) {
      color = 'white';
    }
    let renderer:esri.SimpleRenderer = (this._propertyLayer.renderer as esri.SimpleRenderer).clone();
    
    //@ts-ignore
    renderer.symbol.outline.color = color;
    this._propertyLayer.renderer = renderer;          
  }

  sortBasemaps = (a, b) => {
     if (a.title < b.title) {
       return 1;
     }
     if (a.title > b.title) {
       return -1;
     }
     return 0;
  }

  filterBasemaps = mapView => {
    this._planBoundary.queryFeatureCount({geometry: mapView.center}).then(count => {
      if (this._inRaleigh != count > 0) {
        (this._basemapGallery.source as esri.PortalBasemapsSource).filterFunction = event => {
          if (count === 0) { 
            return event.portalItem.tags.indexOf('Wake') > -1;
          } else {
            return true;
          }
        };
        setTimeout(()=> {
          console.log(this._basemapGallery.source.basemaps.length);
          if (count === 0 && mapView.map.basemap.title.indexOf('Imagery') > -1 && mapView.map.basemap.portalItem.tags.indexOf('Wake') < 0) { 
            let oldtitle = mapView.map.basemap.title;
            let year = parseInt(oldtitle.replace('Imagery ', '')) + 1;
            let basemap = null;
            let matches:esri.Collection<esri.Basemap>;
            let basemaps = this._basemapGallery.source.basemaps.clone();
            do {
              matches = basemaps.filter(bm => {
                return bm.title === 'Imagery ' + year;
              });
              if (matches.length) {
                basemap = matches.getItemAt(0);
                break;
              }
              year+=1;
            } while (year <= new Date().getFullYear());
            if (basemap) {
              mapView.map.basemap = basemap;
  
            }
  
            //mapView.map.basemap = this._basemapGallery.source.basemaps.getItemAt(this._basemapGallery.source.basemaps.length - 1);
            this.snackbar.open(oldtitle + ' base map not available for this area, switched to ' + mapView.map.basemap.title, '', {
              duration: 3000
            });
          }
        }, 500)
      }
      this._inRaleigh = count > 0;
    }).then(result => {
      setTimeout(() => {        
        this._basemapGallery.viewModel.source.basemaps.sort(this.sortBasemaps);
        this._basemapGallery.viewModel.source.basemaps.forEach((bm,i) => {
          if (bm.title.indexOf('Base') > -1) {
            this._basemapGallery.viewModel.source.basemaps.splice(i, 1);
            this._basemapGallery.viewModel.source.basemaps.unshift(bm);
          }
        });
      }, 500);
    });
  }

  addBasemapExpand(mapView, expand) {
    expand.watch('expanded', expanded => {
      if (!this._basemapGallery) {
        this.addBasemapGallery(mapView, expand)
      } else {
        //@ts-ignore
         this.expandPanelExpanded(expanded, this._basemapGallery);
         this._basemapGallery.viewModel.source.basemaps.sort(this.sortBasemaps);
         this._basemapGallery.viewModel.source.basemaps.forEach((bm,i) => {
           if (bm.title.indexOf('Base') > -1) {
             this._basemapGallery.viewModel.source.basemaps.splice(i, 1);
             this._basemapGallery.viewModel.source.basemaps.unshift(bm);
           }
         });           
      }
     });

  }

  async addBasemapGallery(mapView, expand) {
    try {
      const [BasemapGallery, 
        PortalBasemapsSource, 
        FeatureLayer
        ] = await loadModules([
          'esri/widgets/BasemapGallery',
          'esri/widgets/BasemapGallery/support/PortalBasemapsSource',
          'esri/layers/FeatureLayer'
        ])

        
        this._planBoundary = new FeatureLayer({
          portalItem: { 
            id: "a64564abdc1d41bcbb8767ce893c2967"
          }  
        });        

      mapView.map.watch('basemap', this.togglePropertyLineColor);

      this._basemapGallery = new BasemapGallery(
        {view:mapView,
          source: new PortalBasemapsSource({
            query: "id:" + this._raleighGroupId
          }),
          container: document.createElement("div"),
        });
          //@ts-ignore
       expand.content = this._basemapGallery.domNode;
         //@ts-ignore
         disableBodyScroll(this._basemapGallery.domNode);   

        

         


      mapView.watch('stationary', stationary => {
        if (stationary) {
          setTimeout(() => {
            this.filterBasemaps(mapView);
          });

        }
      });
      return true;
    } catch (error) {
      console.log('We have an error: ' + error);
      return false;

    }
  }  
  
  addLayerListExpand(mapView, expand) { 
    expand.watch('expanded', expanded => {
      if (!this._layerList) {
        this.addLayerList(mapView, expand)
      } else {
        
      }
     });
  }
  
  async addLayerList(mapView, expand) {
    try {
      const [LayerList] = await loadModules([
        'widgets/LayerList'
      ])  

        let defineLayerListActions = function (event) {
          event.item.actionsSections = [];
          if (event.item.layer.title.indexOf('Property') > -1 && event.item.layer.type != 'group') {
            event.item.actionsSections.push([
              {
                title: "Label By PIN",
                className: "esri-icon-checkbox-unchecked",
                id: "label-PIN_NUM",
                type: "toggle"
              },
              {
                title: "Label By Address",
                className: "esri-icon-checkbox-unchecked",
                id: "label-SITE_ADDRESS",
                type: "toggle"
              },
              {
                title: "Label By REID",
                className: "esri-icon-checkbox-unchecked",
                id: "label-REID",
                type: "toggle"
              }          
            ]);

          }
          if (event.item.layer.type != 'group') {
            event.item.actionsSections.push(
              [{
                title: "Increase opacity",
                className: "esri-icon-up",
                id: "increase-opacity"
              }, {
                title: "Decrease opacity",
                className: "esri-icon-down",
                id: "decrease-opacity"
              }]);
              event.item.actionsSections.push([
              {
                title: "Go to full extent",
                className: "esri-icon-zoom-out-fixed",
                id: "full-extent"
              }              
              ]);

          }
        };      
        this._layerList = new LayerList(
          {view:mapView,
            container: document.createElement("div"),
            listItemCreatedFunction: defineLayerListActions
          });
  

            //@ts-ignore
          expand.content = this._layerList.domNode;
          expand.watch('expanded', expanded => {
            //@ts-ignore
             this.expandPanelExpanded(expanded, this._layerList);
           });
  
  
           //@ts-ignore
          disableBodyScroll(this._layerList.domNode);
  
          this._layerList.on("trigger-action", event => {
  
            // Capture the action id.
            var id = event.action.id;
            if (id === "full-extent") {
  
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              mapView.goTo({target: event.item.layer.fullExtent, scale: event.item.layer.minScale});
  
            } else if (id === "information") {
  
              // if the information action is triggered, then
              // open the item details page of the service layer
              window.open(event.item.layer.url);
  
            } else if (id === "increase-opacity") {
  
              // if the increase-opacity action is triggered, then
              // increase the opacity of the GroupLayer by 0.25
  
              if (event.item.layer.opacity + 0.1 < 1) {
                event.item.layer.opacity += 0.1;
              } else {
                event.item.layer.opacity = 1;
  
              }
            } else if (id === "decrease-opacity") {
  
              // if the decrease-opacity action is triggered, then
              // decrease the opacity of the GroupLayer by 0.25
  
              if (event.item.layer.opacity - 0.1  > 0) {
                event.item.layer.opacity -= 0.1;
              } else {
                event.item.layer.opacity = 0;
  
              }
            } 
            if (id.indexOf('label-') > -1) {
              
              let fieldName = id.split('-')[1];
              if(event.action.value) {
                this._propertyLabelFields.push("$feature." + fieldName);           
              } else {
                this._propertyLabelFields.splice(this._propertyLabelFields.indexOf("$feature." + fieldName), 1);

              }


              let labelClass:esri.LabelClass = {
                labelExpressionInfo: { expression: "return Concatenate([" + this._propertyLabelFields.toString() + "], TextFormatting.NewLine);" },
                symbol: {
                  type: "text",  // autocasts as new TextSymbol()
                  //@ts-ignore
                  color: "black",
                  haloSize: 1,
                  haloColor: "white"
                },
              
              };

              this._propertyLayer.labelingInfo = [labelClass];
            }     
          });
        return true;

              
      } catch (error) {
        console.log('We have an error: ' + error);
        return false;

      }
  }      
  addLegendExpand(mapView, expand) { 
    expand.watch('expanded', expanded => {
      if (!this._legend) {
        this.addLegend(mapView, expand)
      } else {
        
      }
     });
  }
  async addLegend(mapView, expand) {
    try {
      const [Legend] = await loadModules([
          'esri/widgets/Legend'
        ])  
 
        this._legend = new Legend({
          view: mapView,
          style: "classic",
          container: document.createElement("div"),            
        })


          //@ts-ignore
        expand.content = this._legend.domNode;     

        expand.watch('expanded', expanded => {
          this.expandPanelExpanded(expanded, this._legend);
         });

        //@ts-ignore
        disableBodyScroll(this._legend.domNode);         
        return true;

      } catch (error) {
        console.log('We have an error: ' + error);
        return false;
      }
  }      

  async addToolWidgets(mapView) {
    try {
      const [Expand] = await loadModules([
          'esri/widgets/Expand'
        ])  
        const selectExpand:esri.Expand = new Expand({
          view: mapView, 
          expandIconClass: "esri-icon-cursor",
          group: 'top-left',
          expandTooltip: 'Property Select'
          
        }
        );

      mapView.ui.add(selectExpand, "top-left");
      this.addSelectExpand(mapView, selectExpand);

      const drawExpand:esri.Expand = new Expand({
        view: mapView, 
        expandIconClass: "esri-icon-edit",
        group: 'top-left',
        expandTooltip: 'Draw'
        
      }
      );

    mapView.ui.add(drawExpand, "top-left");     
    this.addDrawExpand(mapView, drawExpand);

      const measureExpand:esri.Expand = new Expand({
        view: mapView, 
        expandIconClass: "esri-icon-polyline",
        group: 'top-left',
        expandTooltip: 'Print'
        
      }
      );
  
      mapView.ui.add(measureExpand, "top-left");     
      this.addMeasureExpand(mapView, measureExpand);     

      const bookmarkExpand:esri.Expand = new Expand({
        view: mapView, 
        expandIconClass: "esri-icon-bookmark",
        group: 'top-left',
        expandTooltip: 'Bookmarks'
        
      }
      );

    mapView.ui.add(bookmarkExpand, "top-left");     
    this.addBookmarkExpand(mapView, bookmarkExpand);  

    const printExpand:esri.Expand = new Expand({
      view: mapView, 
      expandIconClass: "esri-icon-printer",
      group: 'top-left',
      expandTooltip: 'Print'
      
    }
    );

    mapView.ui.add(printExpand, "top-left");     
    this.addPrintExpand(mapView, printExpand);       
    this.addClear(mapView);
      } catch (error) {
        console.log('We have an error: ' + error);
      }        




  }

  async addExpandWidgets(mapView) {
    try {
      const [Expand] = await loadModules([
          'esri/widgets/Expand'
        ])  
        const searchExpand:esri.Expand = new Expand({
          view: mapView, 
          expandIconClass: "esri-icon-search",
          group: 'top-right',
          expandTooltip: 'Search By Location'
          
        }
        );
      mapView.ui.add(searchExpand, "top-right");             
        const baseExpand:esri.Expand = new Expand({
          view: mapView, 
          expandIconClass: "esri-icon-basemap",
          group: 'top-right',
          expandTooltip: 'Base Maps'
          
        }
        );          
      mapView.ui.add(baseExpand, "top-right");   
      const layerExpand:esri.Expand = new Expand({
        view: mapView, 
        expandIconClass: "esri-icon-layers",
        group: 'top-right',
        expandTooltip: 'Layers'}
        );
        mapView.ui.add(layerExpand, "top-right");      
        const legendExpand:esri.Expand = new Expand({

        view: mapView,
        group: 'top-right',
        expandTooltip: 'Legend',

        expandIconClass: "esri-icon-layer-list",

        expanded: false
        });     

      mapView.ui.add(legendExpand, "top-right");      

      this.addSearchExpand(mapView, searchExpand);
      this.addBasemapExpand(mapView, baseExpand);
      this.addLayerListExpand(mapView, layerExpand);      
      this.addLegendExpand(mapView, legendExpand);


    } catch (error) {
      console.log('We have an error: ' + error);
    }
  }  

  addSelectExpand(mapView, expand) { 
    expand.watch('expanded', expanded => {
      if (!this._select) {
        this.addSelect(mapView, expand)
      } else {
        
      }
     });
  }  


  async addSelect(mapView, expand) {
    try {
      const [PropertySelect, GraphicsLayer] = await loadModules([
          'widgets/PropertySelect',
          'esri/layers/GraphicsLayer'
        ])  
        let layer:esri.GraphicsLayer = new GraphicsLayer({id: 'selectGraphics', title: 'selectGraphics', listMode: 'hide'});
        mapView.map.add(layer);
        this._select = new PropertySelect({layer:layer, view: mapView, bufferGraphic:this.shared.selectedGraphic.getValue(), propertyLayer: this._propertyLayer, container: document.createElement("div")});
        this._select.on('buffered', (event) => {
          this.shared.propertyResults.next(event.propertyInfo);
          this.shared.propertyIds.next(event.oids);
        });
        this.shared.selectedGraphic.subscribe(graphic => {
          if (this._select) {
            this._select.bufferGraphic = graphic;
          }
        });
        //mapView.ui.add( this._search, "top-right"); 
        //@ts-ignore
        expand.content = this._select.domNode;     
        return true;   
      } catch (error) {
        console.log('We have an error: ' + error);
        return false;
      }
  }     
  addDrawExpand(mapView, expand) { 
    expand.watch('expanded', expanded => {
      if (!this._draw) {
        this.addDraw(mapView, expand)
      } else {
        
      }
     });
  }  

  async addDraw(mapView, expand) {
    try {
      const [Draw, GraphicsLayer] = await loadModules([
          'widgets/Draw', 'esri/layers/GraphicsLayer'
        ])  
        let layer:esri.GraphicsLayer = new GraphicsLayer({title: 'sketchGraphics', listMode: 'hide'});
        mapView.map.add(layer);
        this._draw = new Draw({layer:layer, view: mapView, container: document.createElement("div")});

        //mapView.ui.add( this._search, "top-right"); 
        //@ts-ignore
        expand.content = this._draw.domNode;     
        return true;   
      } catch (error) {
        console.log('We have an error: ' + error);
        return false;
      }
  }       
  addBookmarkExpand(mapView, expand) { 
    expand.watch('expanded', expanded => {
      if (!this._bookmarks) {
        this.addBookmarks(mapView, expand)
      } else {
        
      }
     });
  }  


  async addBookmarks(mapView, expand) {
    try {
      const [Bookmarks, GraphicsLayer] = await loadModules([
          'widgets/Bookmarks',
          'esri/layers/GraphicsLayer'
        ])  
        this._bookmarks = new Bookmarks({view: mapView, container: document.createElement("div")});

        //@ts-ignore
        expand.content = this._bookmarks.domNode;     
        return true;   
      } catch (error) {
        console.log('We have an error: ' + error);
        return false;
      }
  }  
  

  addMeasureExpand(mapView, expand) { 
    expand.watch('expanded', expanded => {
      if (!this._measure) {
        this.addMeasure(mapView, expand)
      } else {
        
      }
     });
  }  


  async addMeasure(mapView, expand) {
    try {
      const [Measure] = await loadModules([
          'widgets/Measure'
        ])  

        this._measure = new Measure({
          view: mapView,
          container: document.createElement("div")
        });
        //@ts-ignore
        expand.content = this._measure.domNode;     
        return true;   
      } catch (error) {
        console.log('We have an error: ' + error);
        return false;
      }
  }              



  addPrintExpand(mapView, expand) { 
    expand.watch('expanded', expanded => {
      if (!this._print) {
        this.addPrint(mapView, expand)
      } else {
        
      }
     });
  }  


  async addPrint(mapView, expand) {
    try {
      const [Print] = await loadModules([
          'widgets/Print'
        ])  

        this._print = new Print({
          view: mapView,
          container: document.createElement("div"),
          printServiceUrl: "https://mapstest.raleighnc.gov/arcgis/rest/services/Geoprocessing/Print/GPServer/Export%20Web%20Map"
        });
        //@ts-ignore
        expand.content = this._print.domNode;     
        return true;   
      } catch (error) {
        console.log('We have an error: ' + error);
        return false;
      }
  }              



  addSearchExpand(mapView, expand) { 
    expand.watch('expanded', expanded => {
      if (!this._search) {
        this.addSearch(mapView, expand)
      } else {
        
      }
     });
  }  


  async addSearch(mapView, expand) {
    try {
      const [Search] = await loadModules([
          'esri/widgets/Search'
        ])  
        this._search = new Search({view: mapView, allPlaceholder: 'Location Search', container: document.createElement("div")});
        //mapView.ui.add( this._search, "top-right"); 
        //@ts-ignore
        expand.content = this._search.domNode;     
        this._search.on('suggest-complete', e => {
          if (document.getElementsByClassName('esri-search__suggestions-menu').length) {
            disableBodyScroll(document.getElementsByClassName('esri-search__suggestions-menu')[0])
          };
        });
        return true;   
      } catch (error) {
        console.log('We have an error: ' + error);
        return false;
      }
  }        

  async addClear(mapView) {
    try {
      const [Home] = await loadModules([
          'esri/widgets/Home'
        ])  
        let clear:esri.Home = new Home({view:mapView});
        clear.goToOverride = (view, params) => {
          view.map.layers.forEach(layer => {
            if (layer.type === 'graphics') {
              (layer as esri.GraphicsLayer).removeAll();
            }
            this.shared.selectedGraphic.next(null);
          });
          this.location.replaceState('/');
      
          this.shared.propertyInfo.next(null);
          this.shared.propertyResults.next([]);
          return null;
        };
        mapView.ui.add(clear, "top-left");   
        //@ts-ignore
        clear.domNode.classList.add('clear-button');        
        setTimeout( () => {
          //@ts-ignore
          clear.domNode.setAttribute('aria-label', 'Clear graphics and selection');
          //@ts-ignore
  
          clear.domNode.setAttribute('title', 'Clear graphics and selection');
  
        }, 500);      
        return true;   
      } catch (error) {
        console.log('We have an error: ' + error);
        return false;
      }
    }
  async addCompass(mapView) {
    try {
      const [Compass] = await loadModules([
          'esri/widgets/Compass'
        ])  
        this._compass = new Compass({view:mapView})
        mapView.ui.add(this._compass, "bottom-left", 1);      
        return true;   
      } catch (error) {
        console.log('We have an error: ' + error);
        return false;
      }
    }

  async addTrack(mapView) {
    if (Modernizr.geolocation) {
      try {
        const [Track] = await loadModules([
            'esri/widgets/Track'
          ])  
          mapView.ui.add(new Track({view:mapView}), "bottom-left");
          return true;   
        } catch (error) {
          console.log('We have an error: ' + error);
          return false;
        }
      } else {
        return true;
      }
  }     
  async addFullscreen(mapView) {
    if (Modernizr.fullscreen) {
      try {
        const [Fullscreen] = await loadModules([
            'esri/widgets/Fullscreen'
          ])  
          mapView.ui.add(new Fullscreen({view:mapView}), "bottom-left"); 
          return true;   
        } catch (error) {
          console.log('We have an error: ' + error);
          return false;
        }
      } else {
        return true;
      }
  }     



  addScalebar(mapView) {
    loadModules(['esri/widgets/ScaleBar'])
    .then(([ScaleBar]) => { 
      let scale:esri.ScaleBar = new ScaleBar({view:mapView});
      mapView.ui.add(scale, "bottom-right"); 
      return true;
     
    })
    .catch(err => {
      // handle any errors
      console.error(err);
      return false;

    });
  }      
  groupLayers(mapView) {
    loadModules(['esri/layers/GroupLayer'])
    .then(([GroupLayer]) => { 
      let i = 0;
      let groupLayer:esri.GroupLayer;
      let subLayer:esri.GroupLayer;
      do  {
        let layer = mapView.map.layers.getItemAt(i);
        let levels = layer.title.split('|').length
        if (levels > 0 && (layer.type === 'feature' || layer.type === 'map-image')) {
          let groupId = layer.title.substr(0, layer.title.indexOf('|'));
          layer.title = layer.title.replace(groupId + '|', '');
          if (mapView.map.findLayerById(groupId)) {
  
          } else {
            groupLayer = new GroupLayer({title: groupId, id: groupId});
            if (localStorage.getItem('visibleLayers')) {
              if (localStorage.getItem('visibleLayers').split(',').indexOf(groupId) > -1) {
                groupLayer.visible = true;
              } else {
                groupLayer.visible = false;
              }       
            } else {
              groupLayer.visible = true;
            }
            mapView.map.add(groupLayer);
          }
          if (layer.title.indexOf('|') > -1) {
            let subId = layer.title.substr(0, layer.title.indexOf('|'));
            layer.title = layer.title.replace(subId + '|', '');
            if (mapView.map.findLayerById(subId)) {
              layer.visible = true;
              mapView.map.findLayerById(subId).add(layer);
              i--;
            } else {
              subLayer = new GroupLayer({title: subId, id: subId, visible: false});
              layer.visible = true;
              subLayer.add(layer);
              mapView.map.findLayerById(groupId).add(subLayer);
              i--;
            }
  
  
          } else {
            groupLayer.add(layer);
            i--;
  
          }
        
      } i++;} while (i < mapView.map.layers.length - 1);
      mapView.map.layers.sort((a,b) => {
        if (a.title > b.title) {
          return -1;
        } else if (a.title < b.title) {
          return 1;
        } else {
          return 0;
        }
      });

    })
    .catch(err => {
      // handle any errors
      console.error(err);
    });

  }

  expandPanelExpanded(expanded, widget) {
    
    //@ts-ignore
    if (expanded && widget.view) {
    //@ts-ignore      
      if (widget.view.widthBreakpoint === 'xsmall') {
        //@ts-ignore
        widget.domNode.style.maxHeight = window.innerHeight - 100 + 'px';
        this.shared.showToolbar = false;
      } else {
        //@ts-ignore
        widget.domNode.style.maxHeight = '-webkit-fill-available';
        //@ts-ignore
      }
    } else {
      this.shared.showToolbar = true;
    }


  }

  ngOnInit() {

    disableBodyScroll(this.mapViewEl.nativeElement);
    this.shared.isHandset$.subscribe(val => {
      this.isHandset = val;
    });
    this.shared.isHandset$.subscribe(val => {
      this.isTablet = val;
    });    

    this.initializeMap();
  
    
}


}
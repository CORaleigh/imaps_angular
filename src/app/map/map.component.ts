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

import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { loadModules } from 'esri-loader';
import esri = __esri;
import { SharedService } from '../shared.service';
import { PropertyService } from '../property.service';
import { Expression, isNgTemplate } from '@angular/compiler';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { ActivatedRoute, Router } from '@angular/router';
import '../modernizr.js';
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
  private isTablet:boolean;
  private isHandset:boolean;
  private _layerList:esri.LayerList;
  private _basemapGallery:esri.BasemapGallery;

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

  constructor(public shared:SharedService, private property:PropertyService, private router:Router, private route: ActivatedRoute) { }
  createWidget() {
    
  }
  async initializeMap() {
    try {
      const [WebMap, MapView, config, SimpleFillSymbol, Graphic, GraphicsLayer, GroupLayer, ScaleBar, Fullscreen, Track, Compass, BasemapGallery, LayerList, Legend, Home, Search, Expand, Collection] = await loadModules([
        'esri/WebMap',
        'esri/views/MapView',
        'esri/config',
        'esri/symbols/SimpleFillSymbol',
        'esri/Graphic',
        'esri/layers/GraphicsLayer',
        'esri/layers/GroupLayer',

        "esri/widgets/ScaleBar",
        "esri/widgets/Fullscreen",
        "esri/widgets/Track",
        "esri/widgets/Compass",
        "esri/widgets/BasemapGallery",
        "esri/widgets/LayerList",
        "esri/widgets/Legend",
        "esri/widgets/Home",
        "esri/widgets/Search",
        "esri/widgets/Expand",
        "esri/core/Collection"  
      ]);

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

      const mapView: esri.MapView = new MapView(mapViewProperties);

      let defineLayerListActions = function (event) {

        if (event.item.layer.type != 'group') {
          // event.item.panel = {
          //   content: "legend",
          //   open: false
          // };
          event.item.actionsSections = [
            [{
              title: "Increase opacity",
              className: "esri-icon-up",
              id: "increase-opacity"
            }, {
              title: "Decrease opacity",
              className: "esri-icon-down",
              id: "decrease-opacity"
            }]
          ];
        }
      };

      // All resources in the MapView and the map have loaded.
      // Now execute additional processes
      mapView.when(() => { 
        this.groupLayers(mapView, GroupLayer);
      
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

        let scale:esri.ScaleBar = new ScaleBar({view:mapView});
        mapView.ui.add(scale, "bottom-left");
        if (Modernizr.fullscreen) {
          let full:esri.Fullscreen = new Fullscreen({view:mapView});
          mapView.ui.add(full, "top-left");
        }
        if (Modernizr.geolocation) {
          let track:esri.Track = new Track({view:mapView});
          mapView.ui.add(track, "top-left");
        }
        let compass:esri.Compass = new Compass({view:mapView});
        mapView.ui.add(compass, "top-left");    
        let clear:esri.Home = new Home({view:mapView});
        clear.goToOverride = (view, params) => {
          view.map.layers.forEach(layer => {
            if (layer.type === 'graphics') {
              (layer as esri.GraphicsLayer).removeAll();
            }
          });
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
        let searchWidget:esri.widgetsSearch = new Search({
          view: mapView
        });
        // Adds the search widget below other elements in
        // the top left corner of the view
        mapView.ui.add(searchWidget, "top-right");

        this._basemapGallery = new BasemapGallery(
          {view:mapView,
            container: document.createElement("div"),
          });
          let expand:esri.Expand = new Expand({
            view: mapView, 
            expandIconClass: "esri-icon-basemap",
            //@ts-ignore
            content: this._basemapGallery.domNode}
          );          
           //@ts-ignore
           disableBodyScroll(this._basemapGallery.domNode);   
           expand.watch('expanded', expanded => {
            //@ts-ignore
             this.expandPanelExpanded(expanded, this._basemapGallery);
           });

          
          
        mapView.ui.add(expand, "top-right");   


        this._layerList = new LayerList(
          {view:mapView,
            container: document.createElement("div"),
            listItemCreatedFunction: defineLayerListActions
          });

        expand = new Expand({
            view: mapView, 
            expandIconClass: "esri-icon-layers",
            //@ts-ignore
            content:  this._layerList.domNode}
          );

          expand.watch('expanded', expanded => {
            //@ts-ignore
             this.expandPanelExpanded(expanded, this._layerList);
           });


           //@ts-ignore
          disableBodyScroll(this._layerList.domNode);

          this._layerList.on("trigger-action", function(event) {

            // Capture the action id.
            var id = event.action.id;
  
            if (id === "full-extent") {
  
              // if the full-extent action is triggered then navigate
              // to the full extent of the visible layer
              mapView.goTo(event.item.layer.fullExtent);
  
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
          });
        mapView.ui.add(expand, "top-right");  
        const legend:esri.Legend = new Legend({
          view: mapView,
          style: "classic",
          container: document.createElement("div"),            
        })
        const legendExpand:esri.Expand = new Expand({
                   //@ts-ignore
          content: legend.domNode,
          view: mapView,
          expandIconClass: "esri-icon-layer-list",

          expanded: false
        });
        legendExpand.watch('expanded', expanded => {
          this.expandPanelExpanded(expanded, legend);
         });
        //@ts-ignore
        disableBodyScroll(legend.domNode);         
        mapView.ui.add(legendExpand, "top-right");                   
        this.shared.mapView.next(mapView);
        let multiGraphics:esri.GraphicsLayer = new GraphicsLayer({title: 'multiGraphics', listMode: 'hide'});
        let singleGraphics:esri.GraphicsLayer = new GraphicsLayer({title: 'singleGraphics', listMode: 'hide'});
        mapView.map.addMany([multiGraphics, singleGraphics]);
        mapView.on('layerview-create', event => {
          if (event.layer.title) {

          } else {
            event.layer.listMode = 'hide';
          }
        });
        mapView.map.allLayers.forEach(layer => {

          if (layer.title.indexOf('Property') > -1) {
            mapView.whenLayerView(layer).then((layerView: esri.FeatureLayerView) => {
              this._propertyLayer = layerView.layer;
              if (this.route.routeConfig) {
                if (this.route.routeConfig.path === 'pin/:pin') { 
                  this.route.paramMap.subscribe(params => {
                    let url:string = '';
                  //@ts-ignore
                  mapView.map.tables.forEach(table => {
                    if (table.title.indexOf('Condos') > -1) {
                      url = table.url;
                    }
                  });        
                  this.property.queryCondos(url, "PIN_NUM IN ('" + params.get('pin') + "')",'PIN_NUM');

                  });  
                }
              }            
              mapView.on('hold', e => {
                let geometry = e.mapPoint;
                this._propertyLayer.queryFeatures({geometry: geometry, returnGeometry: true, outFields: ['OBJECTID']}).then(result => {
                  let oids = [];
                  result.features.forEach(feature => {
                    oids.push(feature.attributes.OBJECTID);
                    
                  });
                  this.shared.propertyIds.next(oids);
                  singleGraphics.removeAll();
                  multiGraphics.removeAll();
                  (mapView.map.findLayerById('selectGraphics') as esri.GraphicsLayer).removeAll();
                  if (geometry) {
                    singleGraphics.add(new Graphic({geometry:geometry, symbol: {
                      type: 'simple-fill',
                      color: [ 51,51, 204, 0 ],
                      style: "solid",
                      outline: {  // autocasts as new SimpleLineSymbol()   
                        color: "red",
                        width: 2
                      }
                    }}));
                  }
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
              });
              this.shared.propertyIds.subscribe(ids => {

                if (ids.length > 0) {
                  layerView.layer.queryFeatures({objectIds: ids, returnGeometry: true, outFields:['*'], outSpatialReference:mapView.spatialReference}).then(results => {
                    mapView.goTo({target: results.features}, {duration: 2000});
                    multiGraphics.removeAll();                         
                    singleGraphics.removeAll();
                    results.features.forEach(feature => {
                      let g:esri.Graphic = new Graphic();
                      g.geometry = feature.geometry;
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
                    })
                  })
                }
              });
              this.shared.propertyInfo.subscribe(info => {
                if (info) {
                  this.property.getProperties('https://maps.raleighnc.gov/arcgis/rest/services/Property/Property/FeatureServer/1', info.attributes.OBJECTID, 0).subscribe(result => {
                    if (result.relatedRecordGroups[0].relatedRecords.length > 0) {
                      layerView.layer.queryFeatures({objectIds: result.relatedRecordGroups[0].relatedRecords[0].attributes.OBJECTID, returnGeometry: true, outFields:['*'], outSpatialReference:mapView.spatialReference}).then(results => {
                        mapView.goTo({target: results.features}, {duration: 2000});
                        let g:esri.Graphic = new Graphic();
                        g.geometry = results.features[0].geometry;
                        let symbol:esri.SimpleFillSymbol = new SimpleFillSymbol(
                        {
                           color: [ 51,51, 204, 0 ],
                           style: "solid",
                           outline: {  // autocasts as new SimpleLineSymbol()   
                             color: "red",
                             width: 2
                           }
                         });
                         g.symbol = symbol;
                         singleGraphics.removeAll();  
                        singleGraphics.add(g);    
                        mapView.map.reorder(mapView.map.findLayerById('singleGraphics'), 0);
                        mapView.map.reorder(mapView.map.findLayerById('multiGraphics'), 1);
   
                        this.shared.selectedGraphic.next(g);            
                      })                      
                    }
                  });

                }

              })
            });
          }
        });
      });
    } catch (error) {
      console.log('We have an error: ' + error);
    }

  }

  groupLayers(mapView, GroupLayer) {
    let i = 0;
    let groupLayer:esri.GroupLayer;
    let subLayer:esri.GroupLayer;
    do  {
      let layer = mapView.map.layers.getItemAt(i);
      let levels = layer.title.split(' - ').length
      if (levels > 0 && layer.type === 'feature') {
        let groupId = layer.title.substr(0, layer.title.indexOf(' - '));
        layer.title = layer.title.replace(groupId + ' - ', '');
        if (mapView.map.findLayerById(groupId)) {

        } else {
          groupLayer = new GroupLayer({title: groupId, id: groupId});
          mapView.map.add(groupLayer);
        }
        if (layer.title.indexOf(' - ') > -1) {
          let subId = layer.title.substr(0, layer.title.indexOf(' - '));
          layer.title = layer.title.replace(subId + ' - ', '');
          if (mapView.map.findLayerById(subId)) {
            mapView.map.findLayerById(subId).add(layer);
            i--;
          } else {
            subLayer = new GroupLayer({title: subId, id: subId});
            subLayer.add(layer);
            mapView.map.findLayerById(groupId).add(subLayer);
            i--;
          }


        } else {
          groupLayer.add(layer);
          i--;

        }
      // }


      //   if (layer.title.indexOf(' - ') > -1 && layer.type === 'feature') {
      //     let groupId = layer.title.substr(0, layer.title.indexOf(' - '));
      //     layer.title = layer.title.replace(groupId + ' - ', '');
      //     if (mapView.map.findLayerById(groupId)) {
            
      //       (mapView.map.findLayerById(groupId) as esri.GroupLayer).add(layer);
      //       i--;

      //     } else {
      //       groupLayer = new GroupLayer({title: groupId, id: groupId});
      //       layer.title = layer.title.replace(groupId + ' - ', '');
      //       mapView.map.add(groupLayer);
            

      //       groupLayer.add(layer);
      //       i--;
      //     }

    } i++;} while (i < mapView.map.layers.length - 1);
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
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

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @Output() mapLoaded = new EventEmitter<boolean>();
  @ViewChild('mapViewNode') private mapViewEl: ElementRef;
  private sketchEl: ElementRef;
  private selectEl: ElementRef;
  private bufferDistance: number;
  private select:esri.Sketch;
  private sketchColor: string;

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

  constructor(public shared:SharedService, private property:PropertyService) { }

  async initializeMap() {
    try {
      const [WebMap, MapView, config, SimpleFillSymbol, Graphic, GraphicsLayer, ScaleBar, Fullscreen, Track, Compass, BasemapGallery, LayerList, Search, Expand] = await loadModules([
        'esri/WebMap',
        'esri/views/MapView',
        'esri/config',
        'esri/symbols/SimpleFillSymbol',
        'esri/Graphic',
        'esri/layers/GraphicsLayer',
        "esri/widgets/ScaleBar",
        "esri/widgets/Fullscreen",
        "esri/widgets/Track",
        "esri/widgets/Compass",
        "esri/widgets/BasemapGallery",
        "esri/widgets/LayerList",
        "esri/widgets/Search",
        "esri/widgets/Expand"        
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

      // All resources in the MapView and the map have loaded.
      // Now execute additional processes
      mapView.when(() => {
        this.mapLoaded.emit(true);
        let scale:esri.ScaleBar = new ScaleBar({view:mapView});
        mapView.ui.add(scale, "bottom-left");
        let full:esri.Fullscreen = new Fullscreen({view:mapView});
        mapView.ui.add(full, "top-left");
        let track:esri.Track = new Track({view:mapView});
        mapView.ui.add(track, "top-left");
        let compass:esri.Compass = new Compass({view:mapView});
        mapView.ui.add(compass, "top-left");    
        
        let searchWidget:esri.widgetsSearch = new Search({
          view: mapView
        });
        // Adds the search widget below other elements in
        // the top left corner of the view
        mapView.ui.add(searchWidget, "top-right");

        let basemap:esri.BasemapGallery = new BasemapGallery(
          {view:mapView,
            container: document.createElement("div"),
          });
          let expand:esri.Expand = new Expand({
            view: mapView, 
            expandIconClass: "esri-icon-basemap",
            //@ts-ignore
            content: basemap.domNode}
          )          
        mapView.ui.add(expand, "top-right");      
        let layerList:esri.LayerList = new LayerList(
          {view:mapView,
            container: document.createElement("div"),
          });
        expand = new Expand({
            view: mapView, 
            expandIconClass: "esri-icon-layer-list",
            //@ts-ignore
            content: layerList.domNode}
          )          
        mapView.ui.add(expand, "top-right");                  
        this.shared.mapView.next(mapView);
        let multiGraphics:esri.GraphicsLayer = new GraphicsLayer({title: 'multiGraphics'});
        let singleGraphics:esri.GraphicsLayer = new GraphicsLayer({title: 'singleGraphics'});
        mapView.map.addMany([multiGraphics, singleGraphics]);
        mapView.map.allLayers.forEach(layer => {
          if (layer.title.indexOf('Property') > -1) {
            mapView.whenLayerView(layer).then((layerView: esri.FeatureLayerView) => {
              this._propertyLayer = layerView.layer;
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
                  if (geometry) {
                    singleGraphics.add(new Graphic({geometry:geometry, symbol: {
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


 

  ngOnInit() {
    this.initializeMap();
    this.shared.sketchEl.subscribe(el => {
      if (el) {
        this.sketchEl = el;
      }
    });
    this.shared.selectEl.subscribe(el => {
      if (el) {
        this.selectEl = el;
      }
    });    
    this.shared.bufferDistance.subscribe(distance => {
      
        this.bufferDistance = distance;

    });        

}

}
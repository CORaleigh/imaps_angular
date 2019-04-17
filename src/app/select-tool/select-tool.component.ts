import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SharedService } from '../shared.service';
import { loadModules } from 'esri-loader';
import esri = __esri;
@Component({
  selector: 'app-select-tool',
  templateUrl: './select-tool.component.html',
  styleUrls: ['./select-tool.component.css']
})
export class SelectToolComponent implements OnInit {

  @ViewChild('selectDiv') private selectEl: ElementRef;
  distance: number = 0;
  private _mapView:esri.MapView;
  private _propertyLayer:esri.FeatureLayer;
  _select:esri.Sketch;
  private _doubleClickHandler:IHandle;
  private _lastTool:string;
  constructor(public shared:SharedService) { }

  ngOnInit() {
    this.shared.selectEl.next(this.selectEl);
    this.shared.mapView.subscribe(mapView => {
      if (mapView) {
        this._mapView = mapView;
        
        this.initialize();

      }
    });
  }
  inputChanged(event) {
    this.shared.bufferDistance.next(Number(event.target.value));
  }
  
  async initialize() {
    try {
      const [SimpleFillSymbol, Graphic, GraphicsLayer, Sketch, Multipoint, geometryEngine, Color] = await loadModules([
        'esri/symbols/SimpleFillSymbol',
        'esri/Graphic',
        'esri/layers/GraphicsLayer',
        "esri/widgets/Sketch",
        "esri/geometry/Multipoint",
        "esri/geometry/geometryEngine",
        "esri/Color"

      ]);
      let layer:esri.GraphicsLayer = new GraphicsLayer({id: 'selectGraphics', title: 'selectGraphics', listMode: 'hide'});
      this._mapView.map.add(layer);
      this._mapView.map.allLayers.forEach(l => { 
        if (l.title) {
          if (l.title === 'Property') {
            this._propertyLayer = l as esri.FeatureLayer;
          }
        }

      });
      
        this._select = new Sketch({layer:layer, view: this._mapView, container:this.selectEl.nativeElement});
        this._select.watch('activeTool', tool => {
          if (['point','polyline','polygon','circle','rectangle'].indexOf(tool) > -1) {
            
            if (this._doubleClickHandler) {
              this._doubleClickHandler.remove();
            }
            if (tool === 'point') {
              this._doubleClickHandler = this._mapView.on('double-click', event => {
                let geometry:esri.Multipoint = new Multipoint();
              
                geometry.spatialReference = this._mapView.spatialReference;
                geometry.addPoint(event.mapPoint);
                this._select.layer.graphics.forEach(g => {
                  geometry.addPoint(g.geometry as esri.Point);

                });
                this.selectCompleted(geometry, geometryEngine, Graphic, this._select, SimpleFillSymbol, this._propertyLayer);
                this.shared.sketchTool.reset();

              });
            } else {
              this.shared.sketchTool.reset();

            }
          } 
          this._lastTool = tool;

        });
        this.shared.selectTool = this._select;
        this._select.on('create', (event) => {
        if (event.state === 'complete' ) {
          if (this._select.activeTool === 'point' || this._lastTool === 'point') {
            this._select.create('point');
          } else {
            this.selectCompleted(event.graphic.geometry, geometryEngine, Graphic, this._select, SimpleFillSymbol, this._propertyLayer);

          }
  
        } else if (event.state === 'start') {
          layer.removeAll();
        }
      });
      this._select.on('update', (event) => {
        
        if (event.state === 'complete' ) {
    
          if (this._select.activeTool === 'point' || this._lastTool === 'point') {

          } else {
            this.selectCompleted(event.graphic.geometry, geometryEngine, Graphic, this._select, SimpleFillSymbol, this._propertyLayer);

          }  
        } else if (event.state === 'start') {
          layer.removeAll();
        }
      });    
    } catch (error) {
      console.log('We have an error: ' + error);
    }


  }

 
  selectCompleted(geometry, geometryEngine, Graphic, select, SimpleFillSymbol, propertyLayer) {
    this.shared.propertyInfo.next(null);
    this._select.reset();
    let symbol:esri.SimpleFillSymbol = new SimpleFillSymbol(
      {
         color: [ 51,51, 204, 0 ],
         style: "solid",
         outline: {  // autocasts as new SimpleLineSymbol()   
           color: "black",
           width: 2
         }
       });    
    if (this.distance > 0) {
      geometry = geometryEngine.buffer(geometry.graphic.geometry, this.distance, 'feet');
    }

    
 
    propertyLayer.queryFeatures({geometry: geometry, returnGeometry: true, outFields: ['OBJECTID']}).then(result => {
      let oids = [];
      result.features.forEach(feature => {
        oids.push(feature.attributes.OBJECTID);
        
      });
      this.shared.propertyIds.next(oids);
      select.layer.removeAll();

      propertyLayer.queryRelatedFeatures({relationshipId: 0, objectIds: oids, outFields: ['*']}).then(result => {
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
        if (geometry) {
          select.layer.add(new Graphic({geometry:geometry, symbol:symbol}));
        } else {
         // select.layer.add(event.graphic);
  
        }        
      });

      });
  }  

  propertyBuffered(graphic) {
    loadModules([
      'esri/Graphic',
      "esri/geometry/geometryEngine",
      "esri/symbols/SimpleFillSymbol"

    ]).then(([Graphic,geometryEngine, SimpleFillSymbol]) => {    
    if (graphic) {
      let g:esri.Graphic = new Graphic({geometry: graphic.geometry}).clone();
      this.selectCompleted({graphic: g}, geometryEngine, Graphic, this._select, SimpleFillSymbol, this._propertyLayer);
    }
  });            
}
}

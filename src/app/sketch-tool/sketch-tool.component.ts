import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { SharedService } from '../shared.service';
import { loadModules } from 'esri-loader';
import esri = __esri;
@Component({
  selector: 'app-sketch-tool',
  templateUrl: './sketch-tool.component.html',
  styleUrls: ['./sketch-tool.component.css']
})
export class SketchToolComponent implements OnInit {
  @ViewChild('sketchDiv') private sketchEl: ElementRef;
  private _mapView:esri.MapView;
  private _selectedOutlineColor:string;
  constructor(public shared:SharedService) { }
  async initialize() {
    try {
      const [SimpleFillSymbol, Graphic, GraphicsLayer, Sketch, Color] = await loadModules([
        'esri/symbols/SimpleFillSymbol',
        'esri/Graphic',
        'esri/layers/GraphicsLayer',
        "esri/widgets/Sketch",
        "esri/Color"
      ]);
      
      let layer:esri.GraphicsLayer = new GraphicsLayer();
      this._mapView.map.add(layer);
      let sketch:esri.Sketch = new Sketch({layer:layer, view: this._mapView, container:this.sketchEl.nativeElement});
      sketch.on('create', (event) => {
        if (event.state === 'start') {
          event.graphic.symbol = {
            type: "simple-fill",  // autocasts as new SimpleFillSymbol()
            color: [ 51,51, 204, 0.9 ],
            style: "none",
            outline: {  // autocasts as new SimpleLineSymbol()
              color: new Color(this._selectedOutlineColor),
              width: 1
            }
          };
        }
      });
    } catch (error) {
      console.log('We have an error: ' + error);
    }
  }
  ngOnInit() {
    this.shared.sketchEl.next(this.sketchEl);
    this.shared.mapView.subscribe(mapView => {
      if (mapView) {
        this._mapView = mapView;
        debugger
        this.initialize();

      }
    })
  }

}

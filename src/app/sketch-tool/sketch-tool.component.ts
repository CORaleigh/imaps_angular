import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { SharedService } from '../shared.service';
import { loadModules } from 'esri-loader';
import { ColorPickerService, Cmyk } from 'ngx-color-picker';

import esri = __esri;
@Component({
  selector: 'app-sketch-tool',
  templateUrl: './sketch-tool.component.html',
  styleUrls: ['./sketch-tool.component.css']
})
export class SketchToolComponent implements OnInit {
  @ViewChild('sketchDiv') private sketchEl: ElementRef;
  private _mapView:esri.MapView;
  fillcolor:string = 'rgba(255, 0, 0, 0.5)';
  linecolor:string = 'rgba(255, 0, 0, 1.0)';
  width:number = 1;

  _selectedOutlineColor:string;
  constructor(public shared:SharedService, private cpService: ColorPickerService) { }
  async initialize() {
    try {
      const [SimpleFillSymbol, Graphic, GraphicsLayer, Sketch, Color] = await loadModules([
        'esri/symbols/SimpleFillSymbol',
        'esri/Graphic',
        'esri/layers/GraphicsLayer',
        "esri/widgets/Sketch",
        "esri/Color"
      ]);
      
      let layer:esri.GraphicsLayer = new GraphicsLayer({title: 'sketchGraphics', listMode: 'hide'});
      this._mapView.map.add(layer);
      let sketch:esri.Sketch = new Sketch({layer:layer, view: this._mapView, container:this.sketchEl.nativeElement});
      sketch.on('create', (event) => {
        if (event)

        if (event.state === 'start') {
          event.graphic.symbol = {
            type: "simple-fill",  // autocasts as new SimpleFillSymbol()
            color: new Color(this.fillcolor),
            style: "solid",
            outline: {  // autocasts as new SimpleLineSymbol()
              color: new Color(this.linecolor),
              width: this.width
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
        
        this.initialize();

      }
    })
  }

}

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
  label:string = '';
  activeTool:string = '';

  _selectedOutlineColor:string;
  constructor(public shared:SharedService, private cpService: ColorPickerService) { }
  async initialize() {
    try {
      const [SimpleFillSymbol, Graphic, GraphicsLayer, Sketch, Color, TextSymbol] = await loadModules([
        'esri/symbols/SimpleFillSymbol',
        'esri/Graphic',
        'esri/layers/GraphicsLayer',
        "esri/widgets/Sketch",
        "esri/Color",
        "esri/symbols/TextSymbol"
      ]);
      
      let layer:esri.GraphicsLayer = new GraphicsLayer({title: 'sketchGraphics', listMode: 'hide'});
      this._mapView.map.add(layer);
      let sketch:esri.Sketch = new Sketch({layer:layer, view: this._mapView, container:this.sketchEl.nativeElement});
      this.shared.sketchTool = sketch;
      sketch.watch('activeTool', tool => {
        this.activeTool = tool;
        if (['point','polyline','polygon','circle','rectangle'].indexOf(tool) > -1) {
          
          this.shared.selectTool.reset();
        }
      });      
      sketch.on('create', (event) => {
        if (event.state === 'complete' && this.label.length > 0) {
          let textSymbol = {
            type: "text",  // autocasts as new TextSymbol()
            color: "white",
            haloColor: "black",
            haloSize: "1px",
            text: this.label,
            xoffset: 3,
            yoffset: 3,
            font: {  // autocast as new Font()
              size: 12,
              family: "sans-serif",
              weight: "bold"
            }
          };
          layer.add(new Graphic({geometry:event.graphic.geometry, symbol:textSymbol}));
          this.label = '';
        }

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

import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { loadModules } from 'esri-loader';
import esri = __esri;
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-measure-tool',
  templateUrl: './measure-tool.component.html',
  styleUrls: ['./measure-tool.component.css']
})
export class MeasureToolComponent implements OnInit {
  private _mapView:esri.MapView;
  @ViewChild('areaDiv') private areaEl: ElementRef;
  @ViewChild('lineDiv') private lineEl: ElementRef;
  @ViewChild('coordDiv') private coordEl: ElementRef;
  @ViewChild('measureDiv') private measureEl: ElementRef;
group:any = {};
  constructor(public shared:SharedService) { }
  selected: string = 'distance';
  toolLoaded: boolean = false;
  _measure:any = null;
  _cc:esri.CoordinateConversion;
  _line:esri.DistanceMeasurement2D;
  _area:esri.AreaMeasurement2D;
  async initialize() {
    try {
      const [AreaMeasurement2D, DistanceMeasurement2D, CoordinateConversion, Measure] = await loadModules([
        'esri/widgets/AreaMeasurement2D',
        'esri/widgets/DistanceMeasurement2D',
        'esri/widgets/CoordinateConversion',
        'widgets/Measure'
      ]);
      

      // this._cc = new CoordinateConversion({view:this._mapView, container: this.coordEl.nativeElement});
      // this._line = new DistanceMeasurement2D({view:this._mapView, container: this.areaEl.nativeElement});
      // this._area= new AreaMeasurement2D({view:this._mapView, container: this.lineEl.nativeElement});
      
      this._measure = new Measure({view:this._mapView, container: this.measureEl.nativeElement});
      // setTimeout(() => {
      //   this.toolLoaded = true;

      // },1000);

    } catch (error) {
      console.log('We have an error: ' + error);
    }
  }      

  toolChanged(event) {
    this.shared.sketchTool.reset();
    this.shared.selectTool.reset();

    this.selected = event.value;
    let selectedClass = ''
    let hiddenClasses = [];
    switch (event.value) {
      case 'area':
        selectedClass = 'esri-area-measurement-3d';
        hiddenClasses = ['esri-direct-line-measurement-3d', 'esri-coordinate-conversion'];
      break;
      case 'distance':
        selectedClass = 'esri-direct-line-measurement-3d';
        hiddenClasses = ['esri-area-measurement-3d', 'esri-coordinate-conversion'];

      break;
      case 'coordinates':
        selectedClass = 'esri-coordinate-conversion';
        hiddenClasses = ['esri-direct-line-measurement-3d', 'esri-area-measurement-3d'];

      break;
    }
    document.getElementsByClassName(selectedClass)[0].setAttribute('style', 'visibility: visible;display:block;');
    hiddenClasses.forEach(c => {
      document.getElementsByClassName(c)[0].setAttribute('style', 'visibility: hidden;display:none;');

    });
  }
  ngOnInit() {
    this.shared.mapView.subscribe(mapView => {
      if (mapView) {
        this._mapView = mapView;
        
       // this.initialize();

      }
    })    
    this.shared.toolTabIndex.subscribe(index => {
      
      if (index === 2 && !this._measure) {
        this.initialize();
      }
    });
  }

}

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
group:any = {};
  constructor(public shared:SharedService) { }
  selected: string = 'distance';
  toolLoaded: boolean = false;
  async initialize() {
    try {
      const [AreaMeasurement2D, DistanceMeasurement2D, CoordinateConversion] = await loadModules([
        'esri/widgets/AreaMeasurement2D',
        'esri/widgets/DistanceMeasurement2D',
        'esri/widgets/CoordinateConversion'
      ]);

      let cc:esri.CoordinateConversion = new CoordinateConversion({view:this._mapView, container: this.coordEl.nativeElement});
      let line:esri.DistanceMeasurement2D = new DistanceMeasurement2D({view:this._mapView, container: this.areaEl.nativeElement});
      let area:esri.AreaMeasurement2D = new AreaMeasurement2D({view:this._mapView, container: this.lineEl.nativeElement});
      
      setTimeout(() => {
        this.toolLoaded = true;

      },1000);

    } catch (error) {
      console.log('We have an error: ' + error);
    }
  }      

  toolChanged(event) {
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
        
        this.initialize();

      }
    })
  }

}

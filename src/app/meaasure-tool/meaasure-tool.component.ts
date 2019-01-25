import { Component, OnInit } from '@angular/core';
import { loadModules } from 'esri-loader';
import esri = __esri;
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-meaasure-tool',
  templateUrl: './meaasure-tool.component.html',
  styleUrls: ['./meaasure-tool.component.css']
})
export class MeaasureToolComponent implements OnInit {
  private _mapView:esri.MapView;

  constructor(public shared:SharedService) { }
  async initialize() {
    try {
      const [AreaMeasurement2D, DistanceMeasurement2D] = await loadModules([
        'esri/widgets/AreaMeasurement2D',
        'esri/widgets/DistanceMeasurement2D'
      ]);
    } catch (error) {
      console.log('We have an error: ' + error);
    }
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

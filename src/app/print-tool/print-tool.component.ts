import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { loadModules } from 'esri-loader';
import esri = __esri;
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-print-tool',
  templateUrl: './print-tool.component.html',
  styleUrls: ['./print-tool.component.css']
})
export class PrintToolComponent implements OnInit {
  @ViewChild('printDiv') private printEl: ElementRef;

  constructor(public shared:SharedService) { }
  private _mapView:esri.MapView;
  private _print:esri.Print;
  ngOnInit() {
    this.shared.mapView.subscribe(mapView => {
      if (mapView) {
        this._mapView = mapView;
        
        //this.initialize();

      }
    });  
    this.shared.toolTabIndex.subscribe(index => {
      if (index === 4 && !this._print) {
        this.initialize();
      }
    });
  }
  async initialize() {
    try {
      const [Print, esriBundle] = await loadModules([
        "widgets/Print","dojo/i18n!esri/widgets/Print/nls/Print"
      ]);
      esriBundle.titlePlaceHolder = "My Print";

      this._print = new Print({
        view: this._mapView,
        container: this.printEl.nativeElement,
        printServiceUrl: "https://mapstest.raleighnc.gov/arcgis/rest/services/Geoprocessing/Print/GPServer/Export%20Web%20Map"
      });
      

    } catch (error) {
      console.log('We have an error: ' + error);
    }
  }
}

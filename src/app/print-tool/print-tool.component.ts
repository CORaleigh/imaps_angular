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

  ngOnInit() {
    this.shared.mapView.subscribe(mapView => {
      if (mapView) {
        this._mapView = mapView;
        
        this.initialize();

      }
    });  }
  async initialize() {
    try {
      const [Print] = await loadModules([
        "esri/widgets/Print"
      ]);
      let print:esri.Print = new Print({
        view: this._mapView,
        container: this.printEl.nativeElement,
        printServiceUrl: "https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task"
      });


    } catch (error) {
      console.log('We have an error: ' + error);
    }
  }
}

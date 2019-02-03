import { Component, OnInit } from '@angular/core';
import { loadModules } from 'esri-loader';
import esri = __esri;
@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.css']
})
export class AppsComponent implements OnInit {
  items:esri.PortalItem[] = [];
  constructor() { }
  async initialize() {
    try {
      const [Portal, PortalQueryParams]= await loadModules([
      "esri/portal/Portal",
      "esri/portal/PortalGroup"]);
        let portal:esri.Portal = new Portal();
        portal.url = 'https://maps.raleighnc.gov/portal';
          portal.queryGroups({query:'iMAPS Apps'}).then(results => {
            
            if (results.results.length > 0) {
              let group:esri.PortalGroup = results.results[0];
              group.queryItems().then(items => {
                this.items = items.results;
              })
            }
          });


    } catch (error) {
      console.log('We have an error: ' + error);
    }
  }      
  ngOnInit() {
    this.initialize();
  }

}

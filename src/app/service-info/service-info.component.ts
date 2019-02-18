import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { SharedService } from '../shared.service';
import { loadModules } from 'esri-loader';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import esri = __esri;

@Component({
  selector: 'app-service-info',
  templateUrl: './service-info.component.html',
  styleUrls: ['./service-info.component.css']
})
export class ServiceInfoComponent implements OnInit {

  constructor(private shared:SharedService) { }
  @ViewChild('serviceInfo') private infoEl: ElementRef;

  ngOnInit() {
    disableBodyScroll(this.infoEl.nativeElement);       

    this.initialize();
    this.shared.propertyTabIndex.subscribe(index => {
      if (index === 2) {
        this.getServices();
      }
    });
  }

categories:category[] = [
  {name: 'Voting', layers: [
    {id: 'Voting_Precincts_With_Polling_Places_5296'},    
    {id: 'Boundaries_9642'},
    {id: 'Elections_2423'},
    {id: 'CommissionerDistricts_2825'},
    {id: 'CongressionalDistricts_8719'},    
    {id: 'NCSenateDistricts_4915'},
    {id: 'NCHouseDistricts_1457'},
    {id: 'DistrictCourtJudicialDistricts_2355'},
    {id: 'SchoolBoardDistricts_4941'}
  ]},
  {name: 'Environmental', layers: [
    {id: 'WellSeptic_3409'},
    {id: 'WellSeptic_5457'},
    {id: 'Soils_1541'}
  ]},
  {name: 'Planning', layers:[
    {id: 'CaryTaxZoning_7421'},
    {id: 'Subdivisions_8007'},
    {id: 'Jurisdictions_8484'},
    {id: 'Jurisdictions_5318'}
  ]},
  {name: 'Public Safety', layers: [
    {id: 'Raleigh_Police_Districts_9509'},
    {id: 'PublicSafetyDistricts_5194'},
    {id: 'PublicSafety_4174'},
    {id: 'PublicSafetyDistricts_1887'},
    {id: 'PublicSafetyDistricts_185'},
    {id: 'PublicSafetyDistricts_5406'},
    {id: 'PublicSafetyDistricts_7409'}
  ]},
  {name: 'Solid Waste', layers: [
    {id: 'PortalServices_9365'},
    {id: 'ServicesIMaps_1004'}
  ]}
];
selected:category = this.categories[0];
popups:esri.Popup[] = [];
Popup:any;
geometryEngine:esri.geometryEngine;

selectionChanged(event) {
  this.getServices();
}
getServices() {
  if (this.shared.selectedGraphic.getValue()) {
    this.popups.forEach(popup => {
      popup.close();
    })
    this.popups = [];
      let fl = null;
      let buffer = this.geometryEngine.buffer(this.shared.selectedGraphic.getValue().geometry, -10, 'feet');
      let params = {geometry: buffer, outFields: '*'};
      let mapView = this.shared.mapView.getValue();
     let popup:esri.Popup = null;
        this.selected.layers.forEach(layer => {
          fl = mapView.map.findLayerById(layer.id) as __esri.FeatureLayer;
          let div = document.getElementById(layer.id);

          if (fl) {
            fl.queryFeatures(params).then(result => {
             if(result.features.length > 0) {
               popup = new this.Popup({container: document.getElementById(layer.id),
                 actions: [],
                 map: mapView.map,
                 dockEnabled: true,
                 dockOptions: {
                   buttonEnabled: false,
                   breakpoint: false
                 }});
                popup.open({features: result.features});
                this.popups.push(popup);
             }
            });
          }

        });
    }    
  
}
async initialize() {
  try {
    const [Popup, geometryEngine] = await loadModules([
      'esri/widgets/Popup',
      "esri/geometry/geometryEngine"
    ]);
    this.Popup = Popup;
    this.geometryEngine = geometryEngine;
  } catch (error) {
    console.log('We have an error: ' + error);
  }
}

}

class serviceLayer {
  id: string;
}
class category {
  name: string;
  layers: serviceLayer[]
}

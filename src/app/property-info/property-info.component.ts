import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { loadModules } from 'esri-loader';
import esri = __esri;
import { SharedService } from '../shared.service';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

@Component({
  selector: 'app-property-info',
  templateUrl: './property-info.component.html',
  styleUrls: ['./property-info.component.css']
})
export class PropertyInfoComponent implements OnInit {
   _info:any;
   _deeds:any[];
   _addresses:any[];

  sections:string[] = ['Property', 'Ownership', 'Deeds'];

  
  constructor(private shared:SharedService) { }
  @ViewChild('Property') private propertyEl: ElementRef;
  @ViewChild('Ownership') private ownerEl: ElementRef;
  @ViewChild('Deeds') private deedEl: ElementRef;
  @ViewChild('propertyInfo') private infoEl: ElementRef;
  cardWidth:number;
  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
  theme: string = 'light-theme';

  ngOnInit() {
    this.shared.propertyTabIndex.subscribe(index => {
      if (index === 1) {
        setTimeout(() => {
          this.cardWidth = this.infoEl.nativeElement.offsetWidth - 62;
        });
      }
    });
    disableBodyScroll(this.infoEl.nativeElement);       
     

    this.shared.propertyInfo.subscribe(info => {

      if (info) {
        this._info = info;
      }
    });

    this.shared.deeds.subscribe(deeds => {
      if (deeds) {
        this._deeds = deeds;
      }
    });     
    this.shared.addresses.subscribe(addresses => {
      if (addresses) {
        this._addresses = addresses;
        console.log(this._addresses)
      }
    });           
  }

  openLink(url) {
    window.open(url, '_blank');
  }
 


  async openGoogleStreetview(mapView) {
    try {


      const [projection, SpatialReference, Locator] = await loadModules(["esri/geometry/projection", "esri/geometry/SpatialReference", "esri/tasks/Locator"])  
        
        let locator = new Locator({url:'https://maps.raleighnc.gov/arcgis/rest/services/Locators/CompositeLocator/GeocodeServer',outSpatialReference: {wkid: 4326}});
        locator.addressToLocations({address: {Street: this._info.attributes.SITE_ADDRESS}, outFields: ['*']}).then(results => {
          let loc = null;
          for (let result of results) {
            if (result.attributes.Loc_name === 'WakeStreets') {
              loc = result;
              break;
            }
          }
          if (loc.location) {
            let url = 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint='+loc.location.latitude+','+loc.location.longitude;
            window.open(url, '_blank');
          }
        });
      
      
       // let trans = projection.getTransformation(this.shared.selectedGraphic.getValue().geometry.spatialReference, new SpatialReference(4326));
        //let geom = projection.project(this.shared.selectedGraphic.getValue().geometry.centroid, new SpatialReference(4326), trans);
        //@ts-ignore
       // let lat = geom.latitude;
        //@ts-ignore
       // let lng = geom.longitude;

        //window.open(url, '_blank');
    } catch (error) {
      console.log('We have an error: ' + error);
    }
  }  

  decodeJurisdiction(value) {
    switch(value) {
      case 'RA':
        return 'Raleigh';
      case 'CA':
        return 'Cary';
      case 'KN':
        return 'Knightdale';
      case 'WF':
        return 'Wake Forest';     
      case 'AP':
        return 'APEX';     
      case 'ZN':
        return 'Zebulon';      
      case 'RO':
        return 'Rolesville';      
      case 'WE':
        return 'Wendell';          
      case 'FV':
        return 'Fuquay-Varina';      
      case 'HS':
        return 'Holly Springs';    
      case 'WC':
        return 'Wake County';      
      case 'MO':
        return 'Morrisville';                                                  
    }
  }

  scroll(el) {
    if (el === 'Property') {
      this.propertyEl.nativeElement.scrollIntoView();
    } else if (el === 'Ownership') {
      this.ownerEl.nativeElement.scrollIntoView();
    } else if (el === 'Deeds') {
      this.deedEl.nativeElement.scrollIntoView();
    }
  }

}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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

  ngOnInit() {

    this.shared.propertyTabIndex.subscribe(index => {
      if (index === 1) {
        setTimeout(() => {
          this.cardWidth = this.infoEl.nativeElement.offsetWidth - 62;
        });
      }
    })
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
  openGoogleStreetview() {
    console.log(this.shared.selectedGraphic.getValue().geometry);
    let lat =this.shared.selectedGraphic.getValue().geometry.centroid.latitude;
    let lng =this.shared.selectedGraphic.getValue().geometry.centroid.longitude;
    let url = 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint='+lat+','+lng;
    window.open(url, '_blank');
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

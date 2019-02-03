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
   _photos:any[];
   _deeds:any[];
  sections:string[] = ['Property', 'Ownership', 'Deeds'];
  constructor(private shared:SharedService) { }
  @ViewChild('Property') private propertyEl: ElementRef;
  @ViewChild('Ownership') private ownerEl: ElementRef;
  @ViewChild('Deeds') private deedEl: ElementRef;
  @ViewChild('propertyInfo') private infoEl: ElementRef;

  ngOnInit() {
    disableBodyScroll(this.infoEl.nativeElement);
    this.shared.propertyInfo.subscribe(info => {
      if (info) {
        this._info = info;
      }
    });
    this.shared.photos.subscribe(photos => {
      if (photos) {
        this._photos = photos;
      }
    });    
    this.shared.deeds.subscribe(deeds => {
      if (deeds) {
        this._deeds = deeds;
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

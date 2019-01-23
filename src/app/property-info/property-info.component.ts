import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-property-info',
  templateUrl: './property-info.component.html',
  styleUrls: ['./property-info.component.css']
})
export class PropertyInfoComponent implements OnInit {
  private _info:any;
  private _photos:any[];
  private _deeds:any[];
  sections:string[] = ['Property', 'Ownership', 'Deeds'];
  constructor(private shared:SharedService) { }
  @ViewChild('Property') private propertyEl: ElementRef;
  @ViewChild('Ownership') private ownerEl: ElementRef;
  @ViewChild('Deeds') private deedEl: ElementRef;

  ngOnInit() {
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

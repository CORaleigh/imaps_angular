import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  constructor(public shared:SharedService) { }
  ngOnInit() {
    // this.shared.propertyResults.subscribe(results => {
    //   
    //   if (results.length === 1) {
    //     this.shared.propertyTabIndex  = 1;
    //   } else {
    //     this.shared.propertyTabIndex  = 0;
    //   }
    // });
    this.shared.propertyInfo.subscribe(info => {
      this.shared.propertyTabIndex.next(0);
      if (info) {
        this.shared.propertyTabIndex.next(1);
      } else {
        this.shared.propertyTabIndex.next(0);
      }
    });    
    this.shared.propertyResults.subscribe(results => {
      if (results.length > 1) {
        this.shared.propertyTabIndex.next(0);
      }
    });        
  }

}

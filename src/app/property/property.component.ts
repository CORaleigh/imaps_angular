import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  constructor(public shared:SharedService) { }
  selectedIndex:number = 0;
  ngOnInit() {
    // this.shared.propertyResults.subscribe(results => {
    //   debugger
    //   if (results.length === 1) {
    //     this.selectedIndex = 1;
    //   } else {
    //     this.selectedIndex = 0;
    //   }
    // });
    this.shared.propertyInfo.subscribe(info => {
      this.selectedIndex = 0;
      if (info) {
        this.selectedIndex = 1;
      } else {
        this.selectedIndex = 0;
      }
    });    
  }

}

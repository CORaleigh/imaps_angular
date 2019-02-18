import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../shared.service';
import { MatDrawer } from '@angular/material';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  private isHandset:boolean;
  private isTablet:boolean;
  private bothPanels:boolean;
  @ViewChild('searchdrawer') private searchDrawer: MatDrawer;
  constructor(public shared:SharedService){}
  mapCenter = [-122.4194, 37.7749];
  basemapType = 'satellite';
  mapZoomLevel = 12;
  drawerOpen:boolean = false;
  // See app.component.html
  mapLoadedEvent(status: boolean) {
    console.log('The map loaded: ' + status);


  }

  ngOnInit() {
    this.shared.isHandset$.subscribe(val => {this.isHandset = val;});
    this.shared.isTablet$.subscribe(val => {this.isTablet = val;});
    this.shared.bothPanels$.subscribe(val => {this.bothPanels = val;});

    this.shared.propertyInfo.subscribe(info => {
      if (info) {
        this.searchDrawer.open();
        this.hideToolbar(true);
        this.drawerOpen = true;

      }
    });
    this.shared.propertyResults.subscribe(results => {
      if (results) {
        if (results.length > 0) {
          this.searchDrawer.open();
          this.hideToolbar(true);
          this.drawerOpen = true;

        }
      }
    });
  }

  hideToolbar(opened) {
    if (this.isHandset || this.isTablet) {
      debugger
      this.shared.showToolbar = !opened;
    }
  }
  toggle(thisDrawer, thatDrawer) {
    
    thisDrawer.toggle();
    if (this.bothPanels) {
      if (thatDrawer.opened) {
        thatDrawer.toggle();
  
      }
    }
    this.hideToolbar(thisDrawer.opened);


  }
}

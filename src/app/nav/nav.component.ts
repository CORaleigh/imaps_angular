import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from '../shared.service';
import { MatDrawer, MatDialog } from '@angular/material';
import { loadCss } from 'esri-loader';
import { DisclaimerDialogComponent } from '../disclaimer-dialog/disclaimer-dialog.component';
import { FeedbackDialogComponent } from '../feedback-dialog/feedback-dialog.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  private isHandset:boolean;
  private isTablet:boolean;
  private bothPanels:boolean;
  private dark:boolean = true;
  @ViewChild('searchdrawer') private searchDrawer: MatDrawer;
  constructor(public shared:SharedService, public dialog: MatDialog){}
  mapCenter = [-122.4194, 37.7749];
  basemapType = 'satellite';
  mapZoomLevel = 12;
  drawerOpen:boolean = false;
  // See app.component.html
  mapLoadedEvent(status: boolean) {
    console.log('The map loaded: ' + status);
    
  }
  showDisclaimer() {
    this.dialog.open(DisclaimerDialogComponent);
  }

  showFeedback() {
    this.dialog.open(FeedbackDialogComponent);

  } 
  ngOnInit() {
    
    let dark = JSON.parse(localStorage.getItem('darkMode'));
    if (!dark) {
      this.dark = dark;
      this.toggleDarkMode({checked: dark})
    }

    this.shared.isHandset$.subscribe(val => {
      this.isHandset = val;
    });
    this.shared.isTablet$.subscribe(val => {
      this.isTablet = val;
    });
    this.shared.bothPanels$.subscribe(val => {
      this.bothPanels = val;
    });

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

  toggleDarkMode(event) {
    if (!event.checked) {
      document.body.classList.add('light-theme');
      var link = this.getCss('https://js.arcgis.com/4.11/esri/themes/dark/main.css');
      if (link) {
        // create & load the css library
        document.head.removeChild(link);
      }
      loadCss('https://js.arcgis.com/4.11/esri/css/main.css');


    } else {
      document.body.classList.remove('light-theme');
      var link = this.getCss('https://js.arcgis.com/4.11/esri/themes/main.css');
      if (link) {
        // create & load the css library
        document.head.removeChild(link);
      }
      loadCss('https://js.arcgis.com/4.11/esri/themes/dark/main.css');
    }
    this.dark = event.checked;
    this.shared.dark.next(this.dark);
    localStorage.setItem('darkMode', JSON.stringify(this.dark));
  }

  hideToolbar(opened) {
    if (this.isHandset || this.isTablet) {
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

  clearLocalStorage() {
    localStorage.clear();
    this.shared.clearStorage = true;
    window.location = window.location;
  }

  getCss(url) {
    return document.querySelector("link[href*=\"" + url + "\"]");
  }

}

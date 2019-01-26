import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SharedService } from '../shared.service';
import { loadModules } from 'esri-loader';
import esri = __esri;

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
  @ViewChild('bookmarksDiv') private bookmarksEl: ElementRef;
  private _mapView:esri.MapView;

  constructor(public shared:SharedService) { }

  ngOnInit() {
    this.shared.mapView.subscribe(mapView => {
      if (mapView) {
        this._mapView = mapView;
        
        this.initialize();

      }
    });    
  }
  async initialize() {
    try {
      const [Bookmarks] = await loadModules([
        "esri/widgets/Bookmarks"
      ]);
      let bookmarks:esri.Bookmarks = new Bookmarks({
        view: this._mapView,
        container: this.bookmarksEl.nativeElement,
      });


    } catch (error) {
      console.log('We have an error: ' + error);
    }
  }
}

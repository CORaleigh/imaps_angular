import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { loadModules } from 'esri-loader';
import esri = __esri;

@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit, AfterViewInit {
  @ViewChild('bookmarksDiv') private bookmarksEl: ElementRef;
  private _mapView:esri.MapView;
  private _bookmarks:esri.Bookmarks;
  constructor(public shared:SharedService) { }
  bookmarkName:string;


  addIcons() {
    let elms = this.bookmarksEl.nativeElement.getElementsByClassName('esri-bookmarks__bookmark');
    for (var i = 0; i < elms.length;i++) {
      if (!elms[i].getElementsByClassName('mat-icon').length) {
        elms[i].appendChild(this.createIcon());
      }
    }
  }
  createIcon() {
    let span = document.createElement("mat-icon");
          
    span.classList.add('esri-bookmarks_bookmark-remove');
    span.classList.add('mat-icon','material-icons','mat-icon-no-color');    
    span.innerHTML = "close";
    span.onclick = e => {
      e.stopPropagation();
      //@ts-ignore
      let bookmark = e.currentTarget.parentElement["data-bookmark-item"];
      this._bookmarks.bookmarks.forEach(bm => {
        if (bm.name === bookmark.name) {
          this._bookmarks.bookmarks.remove(bm);
        }
      });
      this.updateStorage();
    };
    return span;
  }

  updateStorage() {
    let marks = [];
    this._bookmarks.bookmarks.forEach(bookmark => {
      marks.push({name:bookmark.name, extent: bookmark.extent.toJSON()});
    });
    localStorage.setItem('bookmarks', JSON.stringify(marks));
  }
  ngOnInit() {
    this.shared.toolTabIndex.subscribe(index => {
      if (index === 3 && !this._bookmarks) {
        // setTimeout(()=>{
        //   this.addIcons();
        // }, 500);

      }
    });
    this.shared.mapView.subscribe(mapView => {
      if (mapView) {
        this._mapView = mapView;
        
        //this.initialize();

      }
    });    

    this.shared.toolTabIndex.subscribe(index => {
      if (index === 3 && !this._bookmarks) {
        this.initialize();
      }
    });
  }
  async addBookmark() {
    try {
      const [Bookmark] = await loadModules([
        "esri/webmap/Bookmark"
      ]);
      let bookmark:esri.Bookmark = new Bookmark();
      bookmark.extent = this._bookmarks.view.extent;
      bookmark.name = this.bookmarkName;
      this._bookmarks.bookmarks.push(bookmark);
      setTimeout(()=>{
        this.addIcons();
      }, 200);
      this.updateStorage();

    } catch (error) {
      console.log('We have an error: ' + error);
    }
  }
  async initialize() {
    try {
      const [Bookmarks, Extent] = await loadModules([
        "widgets/Bookmarks", "esri/geometry/Extent"
      ]);
      this._bookmarks = new Bookmarks({
        view: this._mapView,
        container: this.bookmarksEl.nativeElement,
      });

      

      setTimeout(() => {
        if (localStorage.getItem('bookmarks')) {
          let marks = JSON.parse(localStorage.getItem('bookmarks'));
          this._bookmarks.bookmarks.removeAll();
          marks.forEach(mark => {
            this._bookmarks.bookmarks.push(mark);
          });
  
        }

        setTimeout(() => {


        });
      });
 


    } catch (error) {
      console.log('We have an error: ' + error);
    }
  }
  private isVisible: boolean = false;

  ngAfterViewInit() {
    
  }

  
}

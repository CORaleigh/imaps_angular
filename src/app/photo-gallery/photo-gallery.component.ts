import { Component, OnInit, Input, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css'],
})
export class PhotoGalleryComponent implements OnInit {

  constructor(private shared:SharedService) { }
  selectedPhoto:any;
  photoIndex:number = 0;
  _photos:any[] = [];
  @Input()
  cardWidth:number = 0;

  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };

  ngOnInit() {
    this.shared.photos.subscribe(photos => {
      if (photos) {
        
        this._photos = [];
        this.photoIndex = 0;
        this.selectedPhoto = photos[this.photoIndex];
        photos.forEach(photo => {
          this._photos.push(photo);
        });
      }
    });    
  }

  previousPhoto() {
    this.photoIndex -= 1;
    this.selectedPhoto = this._photos[this.photoIndex];
    this.scrollPhoto();
  }

  nextPhoto() {
    this.photoIndex += 1;
    this.selectedPhoto = this._photos[this.photoIndex];
    this.scrollPhoto();
  }

  scrollPhoto() {
    this.scrollTo(document.getElementById("photoViewport"), this.photoIndex * this.cardWidth, 1000);

  }

  swipe(action = this.SWIPE_ACTION.RIGHT) {


    // swipe right, next avatar
    if (action === this.SWIPE_ACTION.RIGHT) {
      this.photoIndex -= 1;
    }

    // swipe left, previous avatar
    if (action === this.SWIPE_ACTION.LEFT) {
      this.photoIndex += 1;
    }
    this.selectedPhoto = this._photos[this.photoIndex];
    this.scrollPhoto();

    // toggle avatar visibility
   // this.avatars.forEach((x, i) => x.visible = (i === nextIndex));
}


scrollTo(element, to, duration) {
  var start = element.scrollLeft,
      change = to - start,
      currentTime = 0,
      increment = 20;
      
  var animateScroll = () => {      
      currentTime += increment;
      var val = this.easeInOutQuad(currentTime, start, change, duration);
      element.scrollLeft = val;
      if(currentTime < duration) {
          setTimeout(animateScroll, increment);
      }
  };
  animateScroll();
}

//t = current time
//b = start value
//c = change in value
//d = duration
easeInOutQuad(t, b, c, d) {
t /= d/2;
if (t < 1) return c/2*t*t + b;
t--;
return -c/2 * (t*(t-2) - 1) + b;
}
}

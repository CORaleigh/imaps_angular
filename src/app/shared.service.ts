import { Injectable, ElementRef } from '@angular/core';
import { loadModules } from 'esri-loader';
import esri = __esri;
import { BehaviorSubject, Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private breakpointObserver: BreakpointObserver) {}
  mapView:BehaviorSubject<esri.MapView> = new BehaviorSubject<esri.MapView>(null);
  propertyResults:BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  propertyInfo:BehaviorSubject<any> = new BehaviorSubject<any>(null);
  propertyIds:BehaviorSubject<number[]> = new BehaviorSubject<number[]>([])
  photos:BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  addresses:BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  deeds:BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  sketchEl:BehaviorSubject<ElementRef> = new BehaviorSubject<ElementRef>(null);
  selectEl:BehaviorSubject<ElementRef> = new BehaviorSubject<ElementRef>(null);
  bufferDistance:BehaviorSubject<number> = new BehaviorSubject<number>(0);
  selectedGraphic:BehaviorSubject<any> = new BehaviorSubject<any>(null);
  propertyBuffered:BehaviorSubject<any> = new BehaviorSubject<any>(null);
  sketchColor:BehaviorSubject<any> = new BehaviorSubject<any>(null);
  sketchTool:esri.Sketch;
  selectTool:esri.Sketch;
  showToolbar:boolean = true;
  dark:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  propertyTabIndex:BehaviorSubject<number> = new BehaviorSubject<number>(0);
  toolTabIndex:BehaviorSubject<number> = new BehaviorSubject<number>(0);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );
  isTablet$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.TabletPortrait)
    .pipe(
      map(result => result.matches)
    );
  bothPanels$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.TabletLandscape)
    .pipe(
      map(result => result.matches)
    );    
}

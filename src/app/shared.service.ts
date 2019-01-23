import { Injectable, ElementRef } from '@angular/core';
import { loadModules } from 'esri-loader';
import esri = __esri;
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  mapView:BehaviorSubject<esri.MapView> = new BehaviorSubject<esri.MapView>(null);
  propertyResults:BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  propertyInfo:BehaviorSubject<any> = new BehaviorSubject<any>(null);
  propertyIds:BehaviorSubject<number[]> = new BehaviorSubject<number[]>([])
  photos:BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  deeds:BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  sketchEl:BehaviorSubject<ElementRef> = new BehaviorSubject<ElementRef>(null);
  selectEl:BehaviorSubject<ElementRef> = new BehaviorSubject<ElementRef>(null);
  bufferDistance:BehaviorSubject<number> = new BehaviorSubject<number>(0);
  selectedGraphic:BehaviorSubject<any> = new BehaviorSubject<any>(null);
  propertyBuffered:BehaviorSubject<any> = new BehaviorSubject<any>(null);
  sketchColor:BehaviorSubject<any> = new BehaviorSubject<any>(null);
}

import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { HttpParams, HttpHeaders } from '@angular/common/http';

import { loadModules } from 'esri-loader';
import esri = __esri;
import { Observable } from 'rxjs';
import { SharedService } from './shared.service';
@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http:HttpClient, public shared:SharedService) { }

  getRelationshipIds (url:string) {
    let params:HttpParams = new HttpParams()
    .set('f', 'json')

    return this.http.get<any>(url, {params: params});
  }

  autocomplete(url: string, where:string, field:string, distinct: boolean, max: number):Observable<any> { 
    let params:HttpParams = new HttpParams()
    .set('where', where)
    .set('outFields', field)
    .set('returnDistinctValues', distinct.toString())
    .set('returnGeometry', 'false')
    .set('orderByFields', field)
    .set('resultRecordCount', max.toString())
    .set('f', 'json')

    return this.http.get<any>(url, {params: params});
  }  

  getCondos(url: string, where: string, field: string):Observable<any> {
    let params:HttpParams = new HttpParams()
    .set('where', where)
    .set('outFields', '*')
    .set('returnGeometry', 'false')
    .set('orderByFields', field)
    .set('f', 'json')

    return this.http.get<any>(url, {params: params});    
  }

  getAddressReids(url: string, where: string, field: string):Observable<any> {
    let params:HttpParams = new HttpParams()
    .set('where', where)
    .set('outFields', 'REA_REID')
    .set('returnGeometry', 'false')
    .set('f', 'json')

    return this.http.get<any>(url, {params: params});    
  }  

  getPhotos(url: string, oid: number, relationshipId: number) {
    let params:HttpParams = new HttpParams()
      .set('objectIds', oid.toString() )
      .set('relationshipId', relationshipId.toString())
      .set('outFields', '*')
      .set('returnGeometry', 'false')
      .set('f', 'json')

    return this.http.get<any>(url + '/queryRelatedRecords', {params: params}); 
  }
  getDeeds(url: string, oid: number, relationshipId: number) {
    let params:HttpParams = new HttpParams()
      .set('objectIds', oid.toString())
      .set('relationshipId', relationshipId.toString())
      .set('outFields', '*')
      .set('returnGeometry', 'false')
      .set('f', 'json')

    return this.http.get<any>(url + '/queryRelatedRecords', {params: params}); 
  }  
  getProperties(url: string, oid: number[], relationshipId: number) {
    let params:HttpParams = new HttpParams()
      .set('objectIds', oid.toString())
      .set('relationshipId', relationshipId.toString())
      .set('outFields', 'OBJECTID')
      .set('returnGeometry', 'true')
      .set('f', 'json')

    return this.http.post<any>(url + '/queryRelatedRecords', params); 
  }    

  queryCondos(url:string, where: string, field: string) {
    this.getCondos(url + '/query', where, field).subscribe(result => {
      if (result.features.length === 1) {
        let feature = result.features[0];
        this.shared.propertyInfo.next(result.features[0]);

      let data = [feature.attributes];
      this.shared.propertyResults.next(data);

      } else if (result.features.length > 1) {
        let data = [];
        result.features.forEach(feature => {
          data.push(feature.attributes);
        });
        
        this.shared.propertyResults.next(data);
      }
      let oids = []
      result.features.forEach(feature => {
        oids.push(feature.attributes.OBJECTID);
      });
      this.getProperties(url, oids, 0).subscribe(result => {
        let oids = [];
        result.relatedRecordGroups.forEach(rrg => {
          rrg.relatedRecords.forEach(rr => {
            oids.push(rr.attributes.OBJECTID);
          });
        });
        this.shared.propertyIds.next(oids);
      });
    });
  }
}

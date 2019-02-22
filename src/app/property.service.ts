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
  fields:esri.Field[] = [];
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

  getRaleighAddresses(url: string, oid: number, relationshipId: number) {
    let params:HttpParams = new HttpParams()
      .set('objectIds', oid.toString())
      .set('relationshipId', relationshipId.toString())
      .set('outFields', '*')
      .set('returnGeometry', 'false')
      .set('f', 'json')

    return this.http.get<any>(url + '/queryRelatedRecords', {params: params}); 
  }
  getWakeAddresses(url: string, oid: number, relationshipId: number) {
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
      this.fields = result.fields;
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

  exportCsv(fields:any[], attributes:any[], element:any) {
    let csv:string = "data:text/csv;charset=utf-8;"//,Owner,Address 1,Address 2,Address 3\r\n";
    fields.forEach(field => {
      csv += "," + field.alias;
    });
    csv += "\r\n";
    let dt:Date = null;
    attributes.forEach(attribute => {
      Object.keys(attribute).forEach(key => {
        let field = fields.filter(field => {return field.name === key})[0];
        if (field.type === 'esriFieldTypeDate') {
          if (attribute[field.name]) {

            dt = new Date(attribute[field.name]);
            csv += dt.getMonth() + '/' + dt.getDay() + '/' + dt.getFullYear() + ',';
          }
        } else {
          if (attribute[field.name]) {
            if (attribute[field.name].toString().indexOf('0') === 0) {
              csv += '"""' + attribute[field.name] + '""",';
    
            } else {
              csv += '"' + attribute[field.name] + '",';
    
            }
          } else {
            csv += ',';

          }

        }

      });
      csv += '\r\n';
    });
    var encodedUri = encodeURI(csv);
    element.href = encodedUri;
    let el:HTMLElement = element as HTMLElement;
    el.click();
  }  
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { PropertyService } from '../property.service';
import { SharedService } from '../shared.service';
import { loadModules } from 'esri-loader';
import esri = __esri;
import { map } from 'rxjs/operators';
export interface SearchGroup {
  type:string,
  values: string[];
}
@Component({
  selector: 'app-property-search',
  templateUrl: './property-search.component.html',
  styleUrls: ['./property-search.component.css']
})

export class PropertySearchComponent implements OnInit {

  constructor(private fb: FormBuilder, private property:PropertyService, private shared:SharedService) { }
  mapView:esri.MapView;
  condoUrl:string;
  addressUrl:string;
  addressChanges:Subscription;
  ownerChanges:Subscription;
  pinChanges:Subscription;
  reidChanges:Subscription;  
  streetChanges:Subscription;  

  searchForm: FormGroup = this.fb.group({searchGroup: ''});
  control: FormControl = new FormControl();
  accountList: any[] = [];
  searchGroups:SearchGroup[] = [{type:'Address', values:[]},{type:'Owner', values:[]},{type:'PIN', values:[]},{type:'REID', values:[]},{type:'Street', values:[]}];
  displayFn(attributes?: any): string | undefined {
    let value = undefined;
    if (attributes) {
      if (attributes.ADDRESS) {
        value = attributes.ADDRESS;
      } else if (attributes.OWNER) {
        value = attributes.OWNER;
      } else if (attributes.PIN_NUM) {
        value = attributes.PIN_NUM;
      } else if (attributes.REID) {
        value = attributes.REID;
      } else if (attributes.STREET) {
        value = attributes.STREET;
      }
    }

    return value;
  }

  ngOnInit() {
    this.shared.mapView.subscribe(mapView => {
      if (mapView) {
        this.mapView = mapView;
        //@ts-ignore
        this.mapView.map.tables.forEach(table => {
          if (table.title.indexOf('Condos') > -1) {
            this.condoUrl = table.url;
          } else if (table.title.indexOf('Addresses') > -1) {
            this.addressUrl = table.url;
          }
        });
    
      }
    });
    this.shared.propertyInfo.subscribe(info => {
      if (info) {
        this.getRelatedRecords(info);

      }
    });
  }

  getValues (result) {
    let values = [];
    if (result.features.length > 0) {
      result.features.forEach(feature => {
          values.push(feature.attributes);
      });
    }    
    return values;
  }
 
   inputChanged(event) {
    if (event.target.value.length > 4) {
      this.searchGroups[0].values=[];
      this.searchGroups[1].values=[];
      this.searchGroups[2].values=[];           
      this.searchGroups[3].values=[];         
      this.searchGroups[4].values=[];           

      this.addressChanges = this.property.autocomplete(this.addressUrl+ '/query', 
        "ADDRESS like '" + event.target.value.toUpperCase() + "%'", 
        'ADDRESS,PIN_NUM', 
        false,
        10).subscribe(result => {
        this.searchGroups[0].values = this.getValues(result);
      });     
      this.ownerChanges = this.property.autocomplete(this.condoUrl+ '/query', 
        "OWNER like '" + event.target.value.toUpperCase() + "%'", 
        'OWNER', 
        true,
        10).subscribe(result => {
        this.searchGroups[1].values = this.getValues(result);
      });
      this.reidChanges = this.property.autocomplete(this.condoUrl+ '/query', 
        "REID like '" + event.target.value.toUpperCase() + "%'", 
        'REID', 
        false,
        10).subscribe(result => {
        this.searchGroups[3].values = this.getValues(result);
      });      
      this.pinChanges = this.property.autocomplete(this.condoUrl+ '/query', 
        "PIN_NUM like '" + event.target.value.toUpperCase() + "%'", 
        'PIN_NUM', 
        true,
        10).subscribe(result => {
        this.searchGroups[2].values = this.getValues(result);
      });    
      this.streetChanges = this.property.autocomplete(this.addressUrl+ '/query', 
        "STREET like '" + event.target.value.toUpperCase() + "%'", 
        'STREET', 
        true,
        10).subscribe(result => {
        this.searchGroups[4].values = this.getValues(result);
      });         
    }            
  }

  getRelatedRecords(info) {
   this.property.getRelationshipIds(this.condoUrl).subscribe(result => {
      if (result.relationships) {
        result.relationships.forEach(relationship => {
          if (relationship.name === 'CONDO_PHOTOS') {
            this.property.getPhotos(this.condoUrl, info.attributes.OBJECTID, relationship.id).subscribe(result => {
              if (result.relatedRecordGroups.length > 0) {
                if (result.relatedRecordGroups[0].relatedRecords.length > 0) {
                  this.shared.photos.next(result.relatedRecordGroups[0].relatedRecords);
                }
              }
            });
          } else if (relationship.name === 'CONDO_BOOKS') {
            this.property.getDeeds(this.condoUrl, info.attributes.OBJECTID, relationship.id).subscribe(result => {
              if (result.relatedRecordGroups.length > 0) {
                if (result.relatedRecordGroups[0].relatedRecords.length > 0) {
                  this.shared.deeds.next(result.relatedRecordGroups[0].relatedRecords);
                }
              }
            });            
          }
        });
      }
    });


  }
  getCondos(where: string, field: string) {
    this.property.getCondos(this.condoUrl + '/query', where, field).subscribe(result => {
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
      this.property.getProperties(this.condoUrl, oids, 0).subscribe(result => {
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

  accountSelected(event) {
    let where = '';
    let field = '';
    switch (event.option.group.label) {
      case 'Address': 
        field = 'PIN_NUM';
        where = field + " = '" + event.option.value['PIN_NUM'] + "'";
        break;
      case 'Owner': 
        field = 'OWNER';
        where = field + " = '" + event.option.value[field] + "'";
        break;   
      case 'PIN': 
        field = 'PIN_NUM';
        where = field + " = '" + event.option.value[field] + "'";
        break;  
      case 'REID': 
        field = 'REID';
        where = field + " = '" + event.option.value[field] + "'";
        break;  
      case 'Street': 
        field = 'FULL_STREET_NAME';
        where = field + " LIKE '%" + event.option.value['STREET'] + "'";
        break;                 
    }

    this.getCondos(where, field);
  }
}

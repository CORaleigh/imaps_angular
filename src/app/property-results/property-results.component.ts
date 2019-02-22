import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { PropertyResultsDataSource } from './property-results-datasource';
import { SharedService } from '../shared.service';
import { SelectionModel } from '@angular/cdk/collections';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { PropertyService } from '../property.service';
@Component({
  selector: 'app-property-results',
  templateUrl: './property-results.component.html',
  styleUrls: ['./property-results.component.css']
})
export class PropertyResultsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('exportCsv') private exportCsvEl: ElementRef;

  @ViewChild('resultTable') private tableEl: ElementRef;

  dataSource: PropertyResultsDataSource;
  constructor(private shared:SharedService, private property:PropertyService) {}
  selection:SelectionModel<any> = new SelectionModel<any>(false, []);    

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['select','SITE_ADDRESS', 'OWNER', 'PIN_NUM', 'EXPORT'];
  rowClicked(row) {
    this.shared.propertyInfo.next({attributes: row});
  };
  exportToCsv() {
    debugger
    this.property.exportCsv(this.property.fields, this.dataSource.data, this.exportCsvEl.nativeElement);
  }
  ngOnInit() {
   // disableBodyScroll(this.tableEl.nativeElement);
    this.dataSource = new PropertyResultsDataSource(this.paginator, this.sort, []);
    this.shared.propertyResults.subscribe(data => {
      if (data) {
        this.paginator.firstPage();
        if (document.getElementsByClassName('table-container').length) {
          disableBodyScroll(document.getElementsByClassName('table-container')[0]);

        } if (this.shared.mapView.getValue()) {
          if (this.shared.mapView.getValue().map.findLayerById('selectGraohics')) {
            (this.shared.mapView.getValue().map.findLayerById('selectGraohics') as __esri.GraphicsLayer).removeAll();
          }
        }
        this.dataSource = new PropertyResultsDataSource(this.paginator, this.sort, data);

      }
    });   
  }
}

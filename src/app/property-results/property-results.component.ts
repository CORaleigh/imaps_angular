import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { PropertyResultsDataSource } from './property-results-datasource';
import { SharedService } from '../shared.service';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-property-results',
  templateUrl: './property-results.component.html',
  styleUrls: ['./property-results.component.css']
})
export class PropertyResultsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: PropertyResultsDataSource;
  constructor(private shared:SharedService) {}
  selection:SelectionModel<any> = new SelectionModel<any>(false, []);    

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['select','SITE_ADDRESS', 'OWNER', 'PIN_NUM'];
  rowClicked(row) {
    this.shared.propertyInfo.next({attributes: row});
  };
  ngOnInit() {
    this.dataSource = new PropertyResultsDataSource(this.paginator, this.sort, []);
    this.shared.propertyResults.subscribe(data => {
      if (data.length) {
        this.dataSource = new PropertyResultsDataSource(this.paginator, this.sort, data);
      }
    });   
  }
}

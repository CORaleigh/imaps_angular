import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { AddressTableDataSource } from './address-table-datasource';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-address-table',
  templateUrl: './address-table.component.html',
  styleUrls: ['./address-table.component.css']
})
export class AddressTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: AddressTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['ADDRESS', 'SUITE', 'TYPE', 'STATUS'];
  constructor(private shared:SharedService) {}

  ngOnInit() {
    this.dataSource = new AddressTableDataSource(this.paginator, this.sort, []);
    this.shared.addresses.subscribe(data => {
      if (data) {
        this.paginator.firstPage();
        let addresses = [];
        data.forEach(address => {
          if (address.attributes.RPID_MAP) {
            this.displayedColumns = ['ADDRESS', 'SUITE', 'TYPE', 'STATUS']
          } else {
            this.displayedColumns = ['ADDRESS']
          }
          addresses.push(address.attributes);
        });

        this.dataSource = new AddressTableDataSource(this.paginator, this.sort, addresses);

      }
    });
  }
}

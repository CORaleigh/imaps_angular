import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface PropertyResultsItem {
  SITE_ADDRESS: string;
  OWNER: string;
  PIN_NUM: string;
  PIN_EXT: string;

}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: PropertyResultsItem[] = [

];

/**
 * Data source for the PropertyResults view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class PropertyResultsDataSource extends DataSource<PropertyResultsItem> {

  constructor(private paginator: MatPaginator, private sort: MatSort, public data: PropertyResultsItem[]) {
    super();
    
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<PropertyResultsItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginator's length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: PropertyResultsItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: PropertyResultsItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'PIN_NUM': return compare(a.PIN_NUM, b.PIN_NUM, isAsc);
        case 'PIN_EXT': return compare(a.PIN_EXT, b.PIN_EXT, isAsc);
        case 'OWNER': return compare(a.OWNER, b.OWNER, isAsc);
        case 'SITE_ADDRESS': return compare(a.SITE_ADDRESS, b.SITE_ADDRESS, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

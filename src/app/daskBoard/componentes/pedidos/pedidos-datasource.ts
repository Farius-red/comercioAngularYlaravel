import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface PedidosItem {
  name: string;
  id: number;
  fechaEntrega: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: PedidosItem[] = [
  {id: 1, name: 'Hydrogen', fechaEntrega: '22/3/21'},
  {id: 2, name: 'Helium', fechaEntrega: '22/3/21'},
  {id: 3, name: 'Lithium', fechaEntrega: '22/3/21'},
  {id: 4, name: 'Beryllium', fechaEntrega: '22/3/21'},
  {id: 5, name: 'Boron', fechaEntrega: '22/3/21'},
  {id: 6, name: 'Carbon', fechaEntrega: '22/3/21'},
  {id: 7, name: 'Nitrogen', fechaEntrega: '22/3/21'},
  {id: 8, name: 'Oxygen', fechaEntrega: '22/3/21'},
  {id: 9, name: 'Fluorine', fechaEntrega: '22/3/21'},
  {id: 10, name: 'Neon', fechaEntrega: '22/3/21'},
  {id: 11, name: 'Sodium', fechaEntrega: '22/3/21'},
  {id: 12, name: 'Magnesium', fechaEntrega: '22/3/21'},
  {id: 13, name: 'Aluminum', fechaEntrega: '22/3/21'},
  {id: 14, name: 'Silicon', fechaEntrega: '22/3/21'},
  {id: 15, name: 'Phosphorus', fechaEntrega: '22/3/21'},
  {id: 16, name: 'Sulfur', fechaEntrega: '22/3/21'},
  {id: 17, name: 'Chlorine', fechaEntrega: '22/3/21'},
  {id: 18, name: 'Argon', fechaEntrega: '22/3/21'},
  {id: 19, name: 'Potassium', fechaEntrega: '22/3/21'},
  {id: 20, name: 'Calcium', fechaEntrega: '22/3/21'},
];

/**
 * Data source for the Pedidos view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class PedidosDataSource extends DataSource<PedidosItem> {
  data: PedidosItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<PedidosItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: PedidosItem[]): PedidosItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: PedidosItem[]): PedidosItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

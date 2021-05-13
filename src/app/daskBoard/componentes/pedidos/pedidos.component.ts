import { AfterViewInit, Component, OnInit, ViewChild,  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { PedidosDataSource, } from './pedidos-datasource';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { ModalverMasComponent } from '../modalver-mas/modalver-mas.component';
import { Pedidos } from 'src/app/core/modelos/pedidos/pedidos.modelo';
import { ProductosService } from 'src/app/core/services/productos.service';
import { Observable, of as observableOf, merge } from 'rxjs';
import { map } from 'rxjs/operators';



@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css'],
})

export class PedidosComponent implements AfterViewInit, OnInit {
  EXAMPLE_DATA: Pedidos[] = [

  ];
  data: Pedidos[] = this.EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;
  @ViewChild(MatTable) table!: MatTable<Pedidos>;


  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'fechaEntrega', 'productos', 'cantidad', 'acciones'];

  constructor(
    public matdiag: MatDialog,
    private productS: ProductosService
  ) {

  }



  ngAfterViewInit(): void {

  }


  ngOnInit(): void {
    this.getAllproduct();
  }


  connect(): Observable<Pedidos[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  getPagedData(data: Pedidos[]): Pedidos[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  getSortedData(data: Pedidos[]): Pedidos[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'id': return compare(+a.id, +b.id, isAsc);
        case 'fechaEntrega': return compare(a.fechaEntrega, b.fechaEntrega, isAsc);
        case 'productos': return compare(a.productos, b.productos, isAsc);
        case 'cantidad': return compare(a.cantidad, b.cantidad, isAsc);
        default: return 0;
      }
    });
}
  // tslint:disable-next-line:typedef
  getAllproduct() {

    this.productS.getAllproduct().subscribe(productos => {
      this.EXAMPLE_DATA = productos;
      console.log(this.EXAMPLE_DATA);
    });
  }
  // tslint:disable-next-line:typedef
  filtrarXid() {
    console.log('filtrar por id');
  }

  // tslint:disable-next-line:typedef
  verMas(id: string, fechaEntrega: string, cantidad: number) {
    const dataConfig = new MatDialogConfig();

    dataConfig.data = {
      id,
      fechaEntrega,
      cantidad,
    };
    this.matdiag.open(ModalverMasComponent, dataConfig);
  }

}
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

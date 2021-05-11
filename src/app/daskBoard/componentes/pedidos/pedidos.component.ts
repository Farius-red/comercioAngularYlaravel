import { AfterViewInit, Component, ViewChild,  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { PedidosDataSource, PedidosItem } from './pedidos-datasource';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { ModalverMasComponent } from '../modalver-mas/modalver-mas.component';



@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css'],
})
export class PedidosComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<PedidosItem>;
  dataSource: PedidosDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'fechaEntrega', 'acciones'];

  constructor(public matdiag: MatDialog) {

    this.dataSource = new PedidosDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  // tslint:disable-next-line:typedef
  filtrarXid() {
    console.log('filtrar por id');
  }

  // tslint:disable-next-line:typedef
  verMas(id: string, name: string, fechaEntrega: string ) {
    const dataConfig = new MatDialogConfig();

    dataConfig.data = {
      id,
      name,
      fechaEntrega,

    };
    this.matdiag.open(ModalverMasComponent, dataConfig);
  }
}

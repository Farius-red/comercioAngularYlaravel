import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedidos } from '../modelos/pedidos/pedidos.modelo';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private httpC: HttpClient) { }

  // tslint:disable-next-line:typedef
  getAllproduct() {
    return this.httpC.get<Pedidos[]>('http://127.0.0.1:8000/api/pedido');
  }
}

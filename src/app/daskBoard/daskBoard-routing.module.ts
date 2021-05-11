import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPortafolioComponent } from './componentes/index/index-portafolio.component';
import { PedidosComponent } from './componentes/pedidos/pedidos.component';

const routes: Routes = [
  {
    path: '',
    component: IndexPortafolioComponent,
    children: [{ path: 'pedidos', component: PedidosComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPortafolioRoutingModule { }

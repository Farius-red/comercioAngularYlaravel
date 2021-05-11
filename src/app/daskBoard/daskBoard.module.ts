import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexPortafolioRoutingModule } from './daskBoard-routing.module';
import { IndexPortafolioComponent } from './componentes/index/index-portafolio.component';

import { MaterialModule } from '../material/material.module';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { CuerpoComponent } from './componentes/cuerpo/cuerpo.component';
import { PedidosComponent } from './componentes/pedidos/pedidos.component';

import { ModalverMasComponent } from './componentes/modalver-mas/modalver-mas.component';


@NgModule({
  declarations: [IndexPortafolioComponent, NavegacionComponent, FooterComponent, CuerpoComponent, PedidosComponent, ModalverMasComponent],
  imports: [
    CommonModule,
    IndexPortafolioRoutingModule,
    MaterialModule,
  ],
  exports: [],
  entryComponents: [ ModalverMasComponent ],
})
export class DaskBoardModule {}

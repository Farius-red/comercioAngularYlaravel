import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexPortafolioRoutingModule } from './daskBoard-routing.module';
import { IndexPortafolioComponent } from './componentes/index/index-portafolio.component';

import { MaterialModule } from '../material/material.module';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { CuerpoComponent } from './componentes/cuerpo/cuerpo.component';
import { PortafolioComponent } from './componentes/portafolio/portafolio.component';


@NgModule({
  declarations: [IndexPortafolioComponent, NavegacionComponent, FooterComponent, CuerpoComponent, PortafolioComponent],
  imports: [
    CommonModule,
    IndexPortafolioRoutingModule,
    MaterialModule,
  ],
  exports: []
})
export class DaskBoardModule {}

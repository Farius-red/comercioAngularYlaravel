import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPortafolioComponent } from './componentes/index/index-portafolio.component';



const routes: Routes = [{ path: '', component: IndexPortafolioComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndexPortafolioRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosService } from './services/productos.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ ProductosService],
})
export class CoreModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TiendaRoutingModule } from './tienda-routing.module';
import { ListarProductosComponent } from './listar-productos/listar-productos.component';
import { VistaProductoComponent } from './vista-producto/vista-producto.component';


@NgModule({
  declarations: [ListarProductosComponent, VistaProductoComponent],
  imports: [
    CommonModule,
    TiendaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TiendaModule { }

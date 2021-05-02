import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarProductosComponent } from './listar-productos/listar-productos.component';
import { VistaProductoComponent } from './vista-producto/vista-producto.component';

const routes: Routes = [
  {
    path: '', component: ListarProductosComponent
  },
  {
    path: 'vista/:id', component: VistaProductoComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiendaRoutingModule { }

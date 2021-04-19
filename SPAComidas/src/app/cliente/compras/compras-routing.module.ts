import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { VistaComponent } from './vista/vista.component';

const routes: Routes = [
  {
    path: '', component: ListarComponent
  },
  {
    path: 'vista/:comidaNombre', component: VistaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComprasRoutingModule { }

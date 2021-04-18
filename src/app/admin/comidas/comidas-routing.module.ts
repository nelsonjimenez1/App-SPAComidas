import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { VistaComponent } from './vista/vista.component';
import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from './editar/editar.component';
const routes: Routes = [
  {
    path: '', component: ListarComponent
  },
  {
    path: 'vista/:id', component: VistaComponent
  },
  {
    path: 'agregar', component: AgregarComponent
  },
  {
    path: 'editar/:id', component: EditarComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComidasRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteComponent } from './cliente.component';

const routes: Routes = [
  {
    path: '',
    component: ClienteComponent,
    children: [
      { path: 'compras', loadChildren: () => import('./compras/compras.module').then(m => m.ComprasModule) },
      { path: 'tienda', loadChildren: () => import('./tienda/tienda.module').then(m => m.TiendaModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }

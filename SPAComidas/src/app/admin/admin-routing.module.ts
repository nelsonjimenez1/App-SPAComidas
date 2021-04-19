import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'comidas', loadChildren: () => import('./comidas/comidas.module').then(m => m.ComidasModule) },
      { path: 'reportes', loadChildren: () => import('./reportes/reportes.module').then(m => m.ReportesModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

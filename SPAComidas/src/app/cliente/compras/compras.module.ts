import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComprasRoutingModule } from './compras-routing.module';
import { ListarComponent } from './listar/listar.component';
import { VistaComponent } from './vista/vista.component';


@NgModule({
  declarations: [ListarComponent, VistaComponent],
  imports: [
    CommonModule,
    ComprasRoutingModule
  ]
})
export class ComprasModule { }

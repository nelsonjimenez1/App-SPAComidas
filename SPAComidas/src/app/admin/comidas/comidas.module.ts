import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComidasRoutingModule } from './comidas-routing.module';
import { ListarComponent } from './listar/listar.component';
import { VistaComponent } from './vista/vista.component';
import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from './editar/editar.component';

@NgModule({
  declarations: [ListarComponent, VistaComponent, AgregarComponent, EditarComponent],
  imports: [
    CommonModule,
    ComidasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComidasModule { }

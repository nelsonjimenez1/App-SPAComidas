import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NavbarHomeComponent } from './navbar-home/navbar-home.component';
import { ComidaService } from './servicios/comida.service'
import { VentaService } from './servicios/venta.service'

@NgModule({
  declarations: [AdminComponent, NavbarHomeComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule
  ],
  providers: [ComidaService, VentaService]
})
export class AdminModule { }

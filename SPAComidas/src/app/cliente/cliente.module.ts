import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './cliente.component';
import { NavbarHomeComponent } from './navbar-home/navbar-home.component';


@NgModule({
  declarations: [ClienteComponent, NavbarHomeComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    HttpClientModule
  ]
})
export class ClienteModule { }

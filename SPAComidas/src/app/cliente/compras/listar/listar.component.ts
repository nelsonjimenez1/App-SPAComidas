import { Component, OnInit } from '@angular/core';
import { VentaService } from './../../servicios/venta.service';
import { Venta } from './../../../models/venta';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  public listaVentas:Venta[] = [];

  constructor(private ventaService: VentaService, private router: Router) { }

  ngOnInit(): void {
    var user = localStorage.getItem('user');
    if(user){
      this.listaVentas = this.ventaService.obtenerVentasPorUser(user);
    }
  }

  nav(nombreComida:string) {
    this.router.navigate(['/cliente/compras/vista/' + nombreComida]);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comida } from './../../../models/comida';
import { Venta } from './../../../models/venta';
import { ComidaService } from './../../servicios/comida.service';
import { VentaService } from './../../servicios/venta.service';
import { AuthService } from './../../../auth/services/auth.service';

@Component({
  selector: 'app-vista-producto',
  templateUrl: './vista-producto.component.html',
  styleUrls: ['./vista-producto.component.css']
})
export class VistaProductoComponent implements OnInit {

  public comida:Comida=new Comida(-1, '', '', -1, -1);
  public cantidad_productos = 0;

  constructor(private ventaService: VentaService, private comidaService: ComidaService, private auth: AuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    var nombre = this.route.snapshot.paramMap.get('comidaNombre');
    if(!nombre) {
      nombre = '';
    }
    this.comida = this.comidaService.buscarComidaPorNombe(nombre);
  }

  comprar(comidaNombre:string) {
    var venta = new Venta()
    venta.comida = this.comida;
    venta.fecha = new Date();
    venta.cantidad_productos = this.cantidad_productos;
    venta.precio_total = venta.cantidad_productos*this.comida.precio_unidad;
    var user = localStorage.getItem('user');
    if(user){
      venta.user = user;
    }
    this.ventaService.agregarVenta(venta);
    console.log(venta);
    alert("se compro exitosamente")
  }
}

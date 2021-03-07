import { Component, OnInit } from '@angular/core';
import { Venta } from './../../../models/venta';
import { Comida } from './../../../models/comida';
import { VentaService } from './../../tienda/servicios/venta.service';
import { ComidaService } from './../../../admin/comidas/servicios/comida.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {

  public venta:Venta = new Venta();
  public comida:Comida = new Comida('', '', -1, -1);;

  constructor(private ventaService: VentaService, private comidaService: ComidaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    var nombreComida = this.route.snapshot.paramMap.get('comidaNombre');
    if(!nombreComida) {
      nombreComida = '';
    }
    var user = localStorage.getItem('user');
    if(user){
      this.venta = this.ventaService.obtenerVenta(user, nombreComida);
      this.comida = this.comidaService.buscarComidaPorNombe(nombreComida);
    }
  }
}

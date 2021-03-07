import { Component, OnInit } from '@angular/core';
import { Venta } from './../../../models/venta';
import { Comida } from './../../../models/comida';
import { VentaService } from './../../../cliente/tienda/servicios/venta.service';
import { ComidaService } from './../../comidas/servicios/comida.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  public listaVentas:Venta[] = [];
  public total = 0;

  constructor(private ventaService: VentaService, private comidaService: ComidaService, private router: Router) { }

  ngOnInit(): void {
    var suma = 0;
    this.listaVentas = this.ventaService.obtenerVentas();
    this.listaVentas.map(elem => {
      suma = suma + elem.precio_total;
    })

    this.total =suma;
  }

}

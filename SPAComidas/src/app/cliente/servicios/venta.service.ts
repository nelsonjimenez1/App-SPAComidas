import { Injectable } from '@angular/core';
import { Venta } from './../../models/venta';


@Injectable({
  providedIn: 'root'
})

export class VentaService {
  private listaVentas:Venta[] = []
  constructor() {
  }

  obtenerVentas() {
    return this.listaVentas;
  }

  agregarVenta(venta:Venta) {
    this.listaVentas.push(venta);
  }

  obtenerVentasPorUser(user:string) {
    var lista:Venta[] = [];
    this.listaVentas.map(elem => {
      if(elem.user == user){
        lista.push(elem);
      }
    });
    return lista;
  }

  obtenerVenta(user:string, nombreComida:string):Venta {
    var venta = new Venta();
    this.listaVentas.map(elem => {
      if(elem.user == user && elem.comida.nombre) {
        venta = elem;
      }
    });
    return venta;
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comida } from './../../../models/comida';
import { Venta } from './../../../models/venta';
import { ComidaService } from './../../../servicios/comida.service';
import { VentaService } from './../../../servicios/venta.service';
import { AuthService } from './../../../servicios/auth.service';

@Component({
  selector: 'app-vista-producto',
  templateUrl: './vista-producto.component.html',
  styleUrls: ['./vista-producto.component.css']
})
export class VistaProductoComponent implements OnInit {

  public comida:Comida=new Comida(-1, '', '', -1, -1, false);
  public cantidad_productos = 0;

  constructor(private ventaService: VentaService, private comidaService: ComidaService, private auth: AuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    var idComida = Number(this.route.snapshot.paramMap.get('id'));
    if(!idComida) {
      idComida = -1;
    }

    this.comidaService.buscarComidaPorNombe(idComida).subscribe(
      result => {
        console.log(result);
        this.comida = result;
      },
      error => console.error(error)
    );
  }

  comprar() {
    var venta = new Venta()
    venta.id = -1;
    venta.comida = this.comida;
    venta.fecha = new Date();
    venta.cantidad_productos = this.cantidad_productos;
    venta.precio_total = venta.cantidad_productos*this.comida.precio_unidad;
    var user = localStorage.getItem('user');
    if(user){
      this.auth.obtenerUserByNombre(user).subscribe(
        result => {
          venta.usuario = result;
          console.log(venta);
          this.ventaService.agregarVenta(venta).subscribe(
            result2 => {
              console.log(result2);
              alert("se agrego exitosamente");
            },
            error2 => console.error(error2)
          );

        },
        error => console.error(error)
      );
    }


  }
}

import { Component, OnInit } from '@angular/core';
import { Venta } from './../../../models/venta';
import { Comida } from './../../../models/comida';
import { VentaService } from './../../../servicios/venta.service';
import { ComidaService } from './../../../servicios/comida.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {

  public venta:Venta = new Venta();
  public comida:Comida = new Comida(-1, '', '', -1, -1, false);;

  constructor(private ventaService: VentaService, private comidaService: ComidaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    var idVenta = Number(this.route.snapshot.paramMap.get('idVenta'));
    if(!idVenta) {
      idVenta = -1;
    }

    this.ventaService.obtenerVenta(idVenta).subscribe(
      result => {
        console.log(result);
        this.venta = result;
        this.comida = this.venta.comida;
      },
      error => console.error(error)
    );
  }
}

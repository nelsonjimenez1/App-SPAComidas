import { Component, OnInit } from '@angular/core';
import { Comida } from './../../../models/comida';
import { ComidaService } from './../../../admin/comidas/servicios/comida.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-listar-productos',
  templateUrl: './listar-productos.component.html',
  styleUrls: ['./listar-productos.component.css']
})
export class ListarProductosComponent implements OnInit {
  public listaComidas:Comida[] = []

  constructor(private comidaService: ComidaService, private router: Router) { }

  ngOnInit(): void {
    this.listaComidas = this.comidaService.obtenerListaComidas();
    console.log(this.listaComidas);
  }

  nav(comidaNombre:string) {
    this.router.navigate(["/cliente/tienda/vista/" + comidaNombre]);
  }
}

import { Component, OnInit } from '@angular/core';
import { Comida } from './../../../models/comida';
import { ComidaService } from './../../../servicios/comida.service';
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
    //validaciones
    //listar productos que tenga existencia
    this.comidaService.obtenerListaComidas().subscribe(
      result => {
        console.log(result);
        this.listaComidas = result;
      },
      error => console.error(error)
    );
  }

  nav(id:number) {
    this.router.navigate(["/cliente/tienda/vista/" + id]);
  }
}

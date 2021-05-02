import { Component, OnInit } from '@angular/core';
import { Comida } from './../../../models/comida';
import { ComidaService } from './../../../servicios/comida.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  public listaComidas:Comida[] = []

  constructor(private comidaService: ComidaService, private router: Router) { }

  ngOnInit(): void {
    this.comidaService.obtenerListaComidas().subscribe(
      results => {
        console.log(results);
        this.listaComidas = results;
      },
      error => console.error(error)
    );
  }

  nav(id:number) {
    this.router.navigate(["/admin/comidas/vista/" + id]);
  }
}

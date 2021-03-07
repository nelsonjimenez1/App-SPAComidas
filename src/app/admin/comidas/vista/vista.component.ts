import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comida } from './../../../models/comida';
import { ComidaService } from './../servicios/comida.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {
  public comida:Comida = new Comida('', '', -1, -1);

  constructor(private comidaService: ComidaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    var nombre = this.route.snapshot.paramMap.get('comidaNombre');
    if(!nombre) {
      nombre = '';
    }
    this.comida = this.comidaService.buscarComidaPorNombe(nombre);
  }

  nav(comidaNombre:string) {
    this.router.navigate(["/admin/comidas/editar/" + comidaNombre]);
  }

  eliminar(comidaNombre:string) {
    this.comidaService.eliminarComida(comidaNombre);
    alert("se elimino exitosamente");
  }
}

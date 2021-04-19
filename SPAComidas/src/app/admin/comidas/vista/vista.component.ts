import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comida } from './../../../models/comida';
import { ComidaService } from './../../servicios/comida.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {
  public comida:Comida = new Comida(-1, '', '', -1, -1);

  constructor(private comidaService: ComidaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    var id = Number(this.route.snapshot.paramMap.get('id'));
    if(!id) {
      id = -1;
    }
    this.comidaService.buscarComidaPorNombe(id).subscribe(
      result => {
        console.log(result);
        this.comida = result;
      },
      error => console.error(error)
    );
  }

  nav(id:number) {
    this.router.navigate(["/admin/comidas/editar/" + id]);
  }

  eliminar(id:number) {
    this.comidaService.eliminarComida(id);
    alert("se elimino exitosamente");
  }
}

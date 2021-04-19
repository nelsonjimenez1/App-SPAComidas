import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comida } from './../../../models/comida';
import { ComidaService } from './../../servicios/comida.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  public comida:Comida=new Comida(-1, '', '', -1, -1);

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

  editar() {
    //validaciones
    this.comidaService.editarComida(new Comida(this.comida.id, this.comida.nombre, this.comida.descripcion, this.comida.cantidad_disponible, this.comida.precio_unidad));
    alert("se edito exitosamente");
  }
}

import { Component, OnInit } from '@angular/core';
import { Comida } from './../../../models/comida';
import { ComidaService } from './../../../servicios/comida.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  public nombre = '';
  public descripcion = '';
  public cantidad = 0;
  public precio_unidad = 0;
  constructor(private comidaService: ComidaService) { }

  ngOnInit(): void {
  }

  agregar() {
    //validaciones
    this.comidaService.agregarComida(new Comida(-1, this.nombre, this.descripcion, this.cantidad, this.precio_unidad, true)).subscribe(
      result => {
        console.log(result);
        alert("se agrego exitosamente");
      },
      error => console.error(error)
    );
    

  }
}

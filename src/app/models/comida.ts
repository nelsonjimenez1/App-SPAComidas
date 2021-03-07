export class Comida {
    public nombre:string;
    public descripcion:string;
    public cantidad_disponible:number;
    public precio_unidad:number;

    constructor(nombre:string, descripcion:string, cantidad_disponible:number, precio_unidad:number) {
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.cantidad_disponible = cantidad_disponible;
      this.precio_unidad = precio_unidad;
  }
}

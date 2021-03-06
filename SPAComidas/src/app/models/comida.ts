export class Comida {
    public id:number;
    public nombre:string;
    public descripcion:string;
    public cantidad_disponible:number;
    public precio_unidad:number;
    public existe:boolean;

    constructor(id:number, nombre:string, descripcion:string, cantidad_disponible:number, precio_unidad:number, existe:boolean) {
      this.id = id;
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.cantidad_disponible = cantidad_disponible;
      this.precio_unidad = precio_unidad;
      this.existe = existe;
  }
}

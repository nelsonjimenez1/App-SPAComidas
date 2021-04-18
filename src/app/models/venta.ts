import { Comida } from './comida';

export class Venta {
    public comida:Comida = new Comida(-1, '', '', -1, -1);
    public fecha:Date = new Date();
    public cantidad_productos:number = 0;
    public precio_total:number = 0;
    public user:string = '';//cambiar el tipo a User
    constructor() {
    }
}

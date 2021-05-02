import { Comida } from './comida';
import { Usuario } from './usuario';

export class Venta {
    public id:number = -1;
    public comida:Comida = new Comida(-1, '', '', -1, -1, false);
    public fecha:Date = new Date();
    public cantidad_productos:number = 0;
    public precio_total:number = 0;
    public usuario:Usuario = new Usuario(-1, '', '', '');
    constructor() {
    }
}

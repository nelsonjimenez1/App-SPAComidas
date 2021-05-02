export class Usuario {

    public id:number;
    public user:string;
    public password:string;
    public rol:string;//Admin o Cliente

    constructor(id:number, user:string, password:string, rol:string) {
      this.id = id;
      this.user = user;
      this.password = password;
      this.rol = rol;
  }
}

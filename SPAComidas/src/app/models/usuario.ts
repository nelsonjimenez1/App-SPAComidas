export class Usuario {
    public user:string;
    public password:string;
    public rol:string;//Admin o Cliente

    constructor(user:string, password:string, rol:string) {
      this.user = user;
      this.password = password;
      this.rol = rol;
  }
}

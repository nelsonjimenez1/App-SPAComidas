import { Injectable } from '@angular/core';

import { Usuario } from './../../models/usuario';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private listaUsuarios:Usuario[] = []
  constructor() {
    this.inicializar();
  }

  inicializar() {
    this.listaUsuarios.push(new Usuario('admin', 'admin', 'Admin'));
  }

  login(user:string, password:string) {
    var rol = 'Na';
    this.listaUsuarios.map(elem => {
      if(elem.user == user && elem.password == password) {
        rol = elem.rol;
      }
    });

    return rol;
  }

  signUp(user:string, password:string, rol:string) {
    this.listaUsuarios.push(new Usuario(user, password, rol));
  }

  obtenerUserByNombre(username:string):Usuario {
    var user = new Usuario('', '', '');
    this.listaUsuarios.map(elem => {
      if(elem.user == username) {
        user = elem;
      }
    });

    return user;
  }
}

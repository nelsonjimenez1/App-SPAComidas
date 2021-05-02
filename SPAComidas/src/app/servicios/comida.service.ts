import { Injectable } from '@angular/core';
import { Comida } from './../models/comida';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})

export class ComidaService {
  public auth:string = '';
  constructor(private http: HttpClient) {
    var auth = localStorage.getItem('authorization');
    if(auth) {
      this.auth = auth;
    }
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.log(error);
    return throwError("An error has occurred");
  }

  private get<T>(url:any): Observable<T> {
    console.log("get:", url);
    var header = {
      headers: new HttpHeaders().set('Authorization',  this.auth)
    }
    return this.http.get<T>(url, header)
      .pipe(
        // retry(5),
        catchError(this.handleError)
      );
  }

  private post<T>(url:any, data: T): Observable<T> {
    console.log("post:", url);
    var header = {
      headers: new HttpHeaders().set('Authorization',  this.auth)
    }
    return this.http.post<T>(url, data, header)
      .pipe(
        // retry(5),
        catchError(this.handleError)
      );
  }

  private put<T>(url:any, data: T): Observable<T> {
    console.log("put:", url);
    var header = {
      headers: new HttpHeaders().set('Authorization',  this.auth)
    }
    return this.http.put<T>(url, data, header)
      .pipe(
        // retry(5),
        catchError(this.handleError)
      );
  }

  private delete<T>(url:any): Observable<T> {
    console.log("delete:", url);
    var header = {
      headers: new HttpHeaders().set('Authorization',  this.auth)
    }
    return this.http.delete<T>(url, header)
      .pipe(
        // retry(5),
        catchError(this.handleError)
      );
  }

  obtenerListaComidas() {
    const url = `${environment.comidasService}/comida`;
    return this.get<Comida[]>(url);
  }

  buscarComidaPorNombe(id:number) {
    const url = `${environment.comidasService}/comida/${id}`;
    return this.get<Comida>(url);
  }

  editarComida(comida:Comida) {
    const url = `${environment.comidasService}/comida`;
    return this.put<Comida>(url, comida);
  }

  agregarComida(comida:Comida) {
    const url = `${environment.comidasService}/comida`;
    return this.post<Comida>(url, comida);
  }
}

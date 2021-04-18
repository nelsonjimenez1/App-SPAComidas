import { Injectable } from '@angular/core';
import { Comida } from './../../models/comida';
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
  constructor(private http: HttpClient) {

  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.log(error);
    return throwError("An error has occurred");
  }

  private get<T>(url:any): Observable<T> {
    console.log("get:", url);
    return this.http.get<T>(url, {withCredentials: false})//cambiar a true cuando halla autenticacion
      .pipe(
        // retry(5),
        catchError(this.handleError)
      );
  }

  private post<T>(url:any, data: T): Observable<T> {
    console.log("post:", url);
    return this.http.post<T>(url, data, {withCredentials: false})
      .pipe(
        // retry(5),
        catchError(this.handleError)
      );
  }

  private put<T>(url:any, data: T): Observable<T> {
    console.log("put:", url);
    return this.http.put<T>(url, data, {withCredentials: false})
      .pipe(
        // retry(5),
        catchError(this.handleError)
      );
  }

  private delete<T>(url:any): Observable<T> {
    console.log("delete:", url);
    return this.http.delete<T>(url, {withCredentials: false})
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

  agregarComida(comida:Comida) {
    const url = `${environment.comidasService}/comida`;
    return this.post<Comida>(url, comida);
  }

  editarComida(comida:Comida) {
    const url = `${environment.comidasService}/comida`;
    return this.put<Comida>(url, comida);
  }

  eliminarComida(id:number) {
    const url = `${environment.comidasService}/comida/${id}`;
    return this.delete(url);
  }
}

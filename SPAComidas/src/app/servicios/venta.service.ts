import { Injectable } from '@angular/core';
import { Venta } from './../models/venta';
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

export class VentaService {
  public auth:string = '';
  constructor(private http: HttpClient) {
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.log(error);
    return throwError("An error has occurred");
  }

  private get<T>(url:any): Observable<T> {
    console.log("get:", url);
    var auth = localStorage.getItem('authorization');
    var header;
    if (auth != null) {
      header = {
        headers: new HttpHeaders().set('Authorization',  auth)
      }
    }
    return this.http.get<T>(url, header)
      .pipe(
        // retry(5),
        catchError(this.handleError)
      );
  }

  private post<T>(url:any, data: T): Observable<T> {
    console.log("post:", url);
    var auth = localStorage.getItem('authorization');
    var header;
    if (auth != null) {
      header = {
        headers: new HttpHeaders().set('Authorization',  auth)
      }
    }
    return this.http.post<T>(url, data, header)
      .pipe(
        // retry(5),
        catchError(this.handleError)
      );
  }

  private put<T>(url:any, data: T): Observable<T> {
    console.log("put:", url);
    var auth = localStorage.getItem('authorization');
    var header;
    if (auth != null) {
      header = {
        headers: new HttpHeaders().set('Authorization',  auth)
      }
    }
    return this.http.put<T>(url, data, header)
      .pipe(
        // retry(5),
        catchError(this.handleError)
      );
  }

  private delete<T>(url:any): Observable<T> {
    console.log("delete:", url);
    var auth = localStorage.getItem('authorization');
    var header;
    if (auth != null) {
      header = {
        headers: new HttpHeaders().set('Authorization',  auth)
      }
    }
    return this.http.delete<T>(url, header)
      .pipe(
        // retry(5),
        catchError(this.handleError)
      );
  }

  obtenerVentas() {
    const url = `${environment.comidasService}/venta`;
    return this.get<Venta[]>(url);
  }

  agregarVenta(venta:Venta) {
    const url = `${environment.comidasService}/venta`;
    return this.post<Venta>(url, venta);
  }

  obtenerVentasPorUser(idUser:string) {
    const url = `${environment.comidasService}/venta/user/${idUser}`;
    return this.get<Venta[]>(url);
  }

  obtenerVenta(id:number) {
    const url = `${environment.comidasService}/venta/${id}`;
    return this.get<Venta>(url);
  }
}

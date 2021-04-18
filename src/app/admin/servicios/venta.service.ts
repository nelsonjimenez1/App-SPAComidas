import { Injectable } from '@angular/core';
import { Venta } from './../../models/venta';
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

  obtenerVentas() {
    const url = `${environment.comidasService}/venta`;
    return this.get<Venta[]>(url);
  }
}

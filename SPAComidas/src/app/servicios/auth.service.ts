import { Injectable } from '@angular/core';
import { Usuario } from './../models/usuario';
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
export class AuthService {
  public auth:string = '';
  constructor(private http: HttpClient) {
  }

  private handleError(error: HttpErrorResponse): Observable<any> {
    console.log(error);
    return throwError("An error has occurred");
  }

  private get<T>(url:any): Observable<T> {
    console.log("get:", url, this.auth);
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

  login(user:string, password:string) {
    const url = `${environment.comidasService}/login`;
    return this.post<Usuario>(url, new Usuario(-1, user, password, ''));
  }

  signUp(user:string, password:string, rol:string) {
    const url = `${environment.comidasService}/users`;
    return this.post<Usuario>(url, new Usuario(-1, user, password, rol));
  }

  obtenerUserByNombre(user:string) {
    const url = `${environment.comidasService}/users/${user}`;
    return this.get<Usuario>(url);
  }
}

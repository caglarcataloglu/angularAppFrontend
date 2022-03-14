import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const AUTH_API = 'http://localhost:3000/auth/'; //this is the nestjs server in my local pc -caglar

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) { }
    login(username: string, password: string): Observable<any> {
      return this.http.post(AUTH_API, {
        username,
        password
      }, httpOptions);
    }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserInfo } from './user.model';
import { Router } from '@angular/router';

const AUTH_API = 'http://localhost:3333/auth/signin'; //this is the nestjs server in my local pc -caglar

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  _user:UserInfo=new UserInfo();
    constructor(private http: HttpClient, private router: Router) { }
    login(username: string, password: string) {
      this.http.post<any>(AUTH_API, { username:username,password:password },httpOptions).subscribe({
        next: data => {
          if(data){
            if(data.isSuccess)
            {
              this._user.id=data.id;
              this._user.user=data.user;
              console.log(data);
              this.router.navigate(['/welcome-page']);
            }
            else
              alert("Wrong username or email.!!!")
          }
      },
        error: error => {
          console.error('There was an error!', error);
          alert("Wrong username or email!!!")
          return { msg: 'Error'};
        
      }
    })}
    getUser(){
      return this._user;
    }

    logOut(){
      this._user=new UserInfo();
      this.router.navigate(['/login-page']);
    }
}



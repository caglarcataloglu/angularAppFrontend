import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'; //added
import { HttpClient } from '@angular/common/http'; //added

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private http: HttpClient) { } //added
  ngOnInit(): void {
  }


  onSubmit(): void {
    
    // rest api calls to nest.js  http://localhost:3000/auth/ //http://localhost:3000/getHello()
   //npm run start:dev
    this.http.get<any>('http://localhost:3333/auth/signin').subscribe({
      next: data => {
        
        debugger;console.log(data.total);
    },
        error: error => {
          return { msg: 'Hello Error'};
        debugger;console.error('There was an error!', error);
    }
})}


}

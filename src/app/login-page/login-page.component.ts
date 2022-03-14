import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'; //added
import { HttpClient } from '@angular/common/http'; //added


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  postId: any;
  email: string = "";
  password: string = "";

  constructor(private http: HttpClient, private authService: AuthService) { } //added
  ngOnInit(): void {
  }


  onSubmit(): void {

   if(this.email == "")
   return alert("enter email");
   if(this.password == "")
   return alert("enter password");
   this.authService.login(this.email, this.password);
  }
}

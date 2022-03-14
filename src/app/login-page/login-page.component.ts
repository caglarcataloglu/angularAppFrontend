import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'; //added
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor() { } 
  ngOnInit(): void {
  }

  onSubmit(): void {
    // to be implemented
    // rest api calls 
    alert("Entered Email id :");
    
  }


}

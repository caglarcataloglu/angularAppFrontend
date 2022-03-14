import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserInfo } from '../user.model';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {
  user:UserInfo=new UserInfo();
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user=this.authService.getUser();
  }

  logout(){
    this.authService.logOut();
  }
}

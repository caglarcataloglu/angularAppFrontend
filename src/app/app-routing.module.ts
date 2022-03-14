import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component'; //added
const routes: Routes = [ //added
  {path: 'welcome-page', component: WelcomePageComponent}, //added
  {path: 'login-page', component: LoginPageComponent}, //added
  {path: '', redirectTo: '/login-page', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path:"",component:HomeComponent
  },
  {
    path:'contact',component: ContactComponent
  },
  {
    path:"cart",component:CartComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"signup",component:SignupComponent
  },
  {
    path:"admin",component:AdminComponent
  },
  {
    path:"**",component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

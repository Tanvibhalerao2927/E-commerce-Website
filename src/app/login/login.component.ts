import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router){}

  EMAIL_PATTERN = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
  + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
  

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Login Submitted:', form.value);
      // Proceed with backend API call here

      
      if(form.value.email==="admin@gmail.com" && form.value.password==="admin123"){
        this.router.navigate(["/admin"]);
      }else{
        //user Home Page
      }




      console.log('Form is invalid!');
    }
  }

}

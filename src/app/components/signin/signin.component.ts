import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  host: {
    class: 'app-signin-cnt'
  }  
})
export class SigninComponent implements OnInit {

  loginForm!: FormGroup;
  submitted = false;
  
  constructor( private userService:UserService, private formBuilder: FormBuilder, private  router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  // Convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  handleLogin() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    const {email, password}= this.loginForm.value;

    this.userService.loginApi({
      email : email,
      password : password
    }).subscribe( results =>{localStorage.setItem("AuthToken", results.data)
     console.log(results);
     
     // this.router.navigate(['/dashboard'])
    },error=>{console.log(error)});


    console.log('Login successful', this.loginForm.value);
  }

  
  handleCreateAccount(){
    this.router.navigate(['/signup']);
  }
  handleForgetPassword(){
    this.router.navigate(['/ForgetPassword']);
  }
}
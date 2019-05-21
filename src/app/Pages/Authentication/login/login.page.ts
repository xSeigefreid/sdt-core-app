import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isLogin = true;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  onLogin() {
    this.authService.login();
    this.router.navigateByUrl('/leads');
  }
onSubmit(form: NgForm) {
  if(!form.valid) {
    return;
  }
  const email = form.value.email;
  const pass = form.value.pass;
  console.log(email,pass);
  if(this.isLogin) {
    //send request to login server
  }else {
    //send request to sign up serve
  }
}
}

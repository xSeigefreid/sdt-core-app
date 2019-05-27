import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

import { GlobalService } from '../../../global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(public token: GlobalService, private http: HttpClient, private authService: AuthService, private loginService: LoginService, private router: Router) { }
  
  isLogin = false;
  username: string;
  pass: string;
  res: any;

  ngOnInit() {
    this.token.token = "";
  }

  onLogin() { }

  onSubmit(form: NgForm) {

    this.username = form.value.username;
    this.pass = form.value.password;

    this.http.post(this.token.url + '/login', {
      username: this.username,
      password: this.pass,
    }).subscribe((response) => {
      if(JSON.parse(JSON.stringify(response)).hasOwnProperty('token') == true) {
        this.token.token = JSON.parse(JSON.stringify(response)).token;
        this.isLogin = true;
        this.loginService.login();
        this.authService.login();
        this.router.navigateByUrl('/leads');
      }
    });
  }
}

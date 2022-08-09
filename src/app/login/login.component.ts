import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login = {
    username: '',
    password: '',
  };
  message!: string;

  constructor(private loginService: LoginService, private router: Router) {}

  onChange(data: string, name: string) {
    if (name == 'name') {
      this.login.username = data;
    } else {
      this.login.password = data;
    }
  }
  ngOnInit(): void {}

  async onSubmit() {
    var res = await this.loginService.login(this.login).toPromise();

    if (res.statusCode == 200) {
      this.router.navigate(['admin/dashboard']);
      //successfull login
    } else {
      this.message = res.message;
    }
  }
}

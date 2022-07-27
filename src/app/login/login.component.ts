import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

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

  constructor(private loginService: LoginService) {}

  onChange(data: string, name: string) {
    if (name == 'name') {
      this.login.username = data;
    } else {
      this.login.password = data;
    }
  }
  ngOnInit(): void {}

  async onSubmit() {
    var res = await this.loginService
      .login(this.login.username, this.login.password)
      .toPromise();

    if (res.statusCode == 200) {
      //successfull login
    } else {
      //error
    }
  }
}

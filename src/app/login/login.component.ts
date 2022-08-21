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
  message: string = '';
  loading:boolean = false;

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
    try {
      this.loading = true;
      var res = await this.loginService.login(this.login).toPromise();

      console.log("res : ",res);
      if (res.message == null || res.message ==undefined) {
        this.router.navigate(['admin']);
      }else{
        this.message = res.message;

      }
      this.loading = false
    } catch (err: any) {
      console.log('err : ', err.error.message);
      if (err.error.message) {
        this.message = err.error.message;
      }
    }
  }
}

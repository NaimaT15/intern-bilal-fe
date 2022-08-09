import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss'],
})
export class UserformComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  formname: string = 'Register User';

  constructor(private adminservice: AdminService, private router: Router) {}

  ngOnInit(): void {}

  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Full Name',
        placeholder: 'Enter Your Full Name',
        required: true,
      },
    },
    {
      key: 'username',
      type: 'input',
      templateOptions: {
        label: 'Enter Username',
        placeholder: 'Enter Your User Name',
        required: true,
      },
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        type: 'password',
        label: 'Enter Password',
        placeholder: 'Enter Users Password',
        required: true,
      },
    },
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Enter Email',
        type: 'email',
        placeholder: 'Enter Your email',

        required: true,
      },
    },
    {
      key: 'role',
      type: 'select',
      templateOptions: {
        label: 'Enter Role',
        options: [
          { label: 'Iron Man', value: 'iron_man' },
          { label: 'Captain America', value: 'captain_america' },
          { label: 'Black Widow', value: 'black_widow' },
          { label: 'Hulk', value: 'hulk' },
          { label: 'Captain Marvel', value: 'captain_marvel' },
        ],
        required: true,
      },
    },
  ];

  async onSubmit() {
    if (this.form.valid) {
      var res = await this.adminservice.addUser(this.form.value).toPromise();

      if ((res.statuscode = 200)) {
        console.log('registerd');
      } else {
        console.log(res.er);
      }
    } else {
      // form no vaild
    }
  }
}

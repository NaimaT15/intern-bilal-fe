import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import Swal from 'sweetalert2';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss'],
})
export class UserformComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  fields: FormlyFieldConfig[] = [];
  options: FormlyFormOptions = {};
  formname: string = 'Register User';
  isTypeEdit: any = null;
  id: any = null;
  data: any = null;

  constructor(
    private adminservice: AdminService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      console.log('type', queryParams['type']);
      console.log('id', queryParams['id']);
      this.isTypeEdit = queryParams['type'];
      this.id = queryParams['id'];
    });
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      console.log('type', queryParams['type']);
      console.log('id', queryParams['id']);
      this.isTypeEdit = queryParams['type'];
      this.id = queryParams['id'];
      this.fetchDataForEdit();
    });
    if (this.id == null) {
      this.fields = [
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
              { label: 'Iron Man', value: '1' },
              { label: 'Captain America', value: '2' },
              { label: 'Black Widow', value: '2' },
              { label: 'Hulk', value: '3' },
              { label: 'Captain Marvel', value: '4' },
            ],
            required: true,
          },
        },
      ];
    }
  }
  async fetchDataForEdit() {
    var res: any = await this.adminservice.getSingleUser(this.id).toPromise();
    console.log('res : ', res);

    this.model = {
      name: this.data.name,
      username: this.data.username,
      email: this.data.email,
      role: this.data.role,
      // id: this.data.id,
    };
    this.fields = [
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
      // {
      //   key: 'password',
      //   type: 'input',
      //   templateOptions: {
      //     type: 'password',
      //     label: 'Enter Password',
      //     placeholder: 'Enter Users Password',
      //     required: true,
      //   },
      // },
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
  }

  async onSubmit() {
    if (this.form.valid) {
      var res = await this.adminservice.addUser(this.form.value).toPromise();

      if ((res.statuscode = 200)) {
        this.router.navigate(['admin/users']);
        Swal.fire(
          'Successfully created',
          'User Created Sucessfully',
          'success'
        );
      } else {
        console.log(res.er);
      }
    } else {
      // form no vaild
    }
  }
}

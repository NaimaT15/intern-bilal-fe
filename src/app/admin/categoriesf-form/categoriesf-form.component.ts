import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-categoriesf-form',
  templateUrl: './categoriesf-form.component.html',
  styleUrls: ['./categoriesf-form.component.scss'],
})
export class CategoriesfFormComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  formname: string = 'Add A Categorie';
  constructor(private adminservice: AdminService, private router: Router) {}

  ngOnInit(): void {}
  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Name',
        placeholder: 'Enter Your Categories Name',

        required: true,
      },
    },
  ];
  async onSubmit() {
    if (this.form.valid) {
      var res = await this.adminservice
        .addCategory(this.form.value)
        .toPromise();

      if (res.statuscode == 200) {
        console.log('registerd');
      } else {
        //error
      }
    } else {
      console.log('error');
    }
  }
}

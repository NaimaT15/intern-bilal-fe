import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-photo-based-form',
  templateUrl: './photo-based-form.component.html',
  styleUrls: ['./photo-based-form.component.scss'],
})
export class PhotoBasedFormComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  formname: string = 'Add A Collection';
  constructor(private adminservice: AdminService, router: Router) {}

  ngOnInit(): void {}
  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Name',
        placeholder: 'Enter Your Item Name',

        required: true,
      },
    },
    {
      key: 'description',
      type: 'textarea',
      templateOptions: {
        label: 'Description',
        placeholder: 'Item Description',

        required: true,
      },
    },
    {
      key: 'category',
      type: 'select',
      templateOptions: {
        label: 'Category',
        placeholder: 'Enter Categoray',
        options: [
          { label: 'Traditional Items', value: 'iron_man' },
          { label: 'Picture', value: 'captain_america' },
          { label: 'Traditional Clothes', value: 'black_widow' },
        ],
        required: true,
      },
    },
    // {
    //   key: 'image',
    //   type: 'file',
    //   // templateOptions: {
    //   // type: 'image',
    //   // label: 'Enter Image',
    //   // required: true,
    //   // accept: 'image/*',
    //   // },
    // },
  ];
  async onSubmit() {
    if (this.form.valid) {
      var res = await this.adminservice.addpb(this.form.value).toPromise();
      if (res.statuscode == 200) {
        return console.log('sucess');
      } else {
        console.log(res.body.message);
      }
    } else {
      console.log('In Vaild Form  Values');
    }
  }
}

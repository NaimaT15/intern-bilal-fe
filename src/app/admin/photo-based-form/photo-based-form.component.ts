import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import Swal from 'sweetalert2';
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
  constructor(private adminservice: AdminService, private router: Router) {}

  ngOnInit(): void {}
  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Name',
        placeholder: 'Enter Your Artifact Name',

        required: true,
      },
    },
    {
      key: 'code',
      type: 'input',
      templateOptions: {
        label: 'Artifact',
        placeholder: 'Enter Artifact Code',
        required: true,
      },
    },
    {
      key: 'description',
      type: 'textarea',
      templateOptions: {
        label: 'Description',
        placeholder: 'Artifact Description',

        required: true,
      },
    },
    {
      key: 'category',
      type: 'select',
      templateOptions: {
        label: 'Category',
        placeholder: 'choose Artifact Categoray',
        options: [
          { label: 'Traditional Items', value: 1 },
          { label: 'Picture', value: 2 },
          { label: 'Traditional Clothes', value: 3 },
        ],
        required: true,
      },
    },
    {
      key: 'image',
      type: 'file',
    },
  ];
  async onSubmit() {
    console.log(this.form.value);
    if (this.form.valid) {
      if (
        this.model.image.length != null &&
        this.model.image.length != undefined
      ) {
        this.model.image = this.model.image[0];
      }
      var res = await this.adminservice.addpb(this.model).toPromise();
      console.log('res : ', res);
      if (res) {
        Swal.fire('Successfully created', 'Succesfully Submited', 'success');
        this.router.navigate(['admin/photos']);
        return console.log('sucess');
      } else {
        console.log(res.body.message);
      }
    } else {
      console.log('In Vaild Form  Values');
    }
  }
}

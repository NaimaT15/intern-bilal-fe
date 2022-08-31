import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { AdminService } from 'src/app/admin/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss'],
})
export class PriceComponent implements OnInit {
  loading: boolean = false;
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
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
      key: 'p_phone_number',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'Phone Number',
        placeholder: 'Enter Your Phone Number',
        required: true,
      },
    },
    {
      key: 's_phone_number',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'Phone number 2',
        placeholder: 'Enter Your phone number',
        required: true,
      },
    },

    {
      key: 'email',
      type: 'input',
      templateOptions: {
        label: 'Email',
        placeholder: 'Enter Your Email',
        required: false,
      },
    },
    {
      key: 'description',
      type: 'textarea',
      templateOptions: {
        label: 'Description',
        placeholder: ' Describe your item',
        required: true,
      },
    },
    {
      key: 'location',
      type: 'input',
      templateOptions: {
        label: 'Location',
        placeholder: ' where is the item located',
        required: false,
      },
    },
    {
      key: 'remark',
      type: 'input',
      templateOptions: {
        label: 'remark',
        placeholder: 'Enter your remark',
        required: false,
      },
    },
  ];
  constructor(private adminservice: AdminService, private router: Router) {}

  ngOnInit(): void {}
  async onSubmit() {
    if (this.form.valid) {
      var res = await this.adminservice.addVisitor(this.model).toPromise();

      if ((res.statuscode = 200)) {
        this.router.navigate(['/contact']);
        Swal.fire(
          'Successfully created',
          'Collection saved Sucessfully',
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

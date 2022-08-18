import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import Swal from 'sweetalert2';
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
  isTypeEdit: any = null;
  id: any = null;
  data: any = null;
  fields: FormlyFieldConfig[] = [];
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
            label: 'Name',
            placeholder: 'Enter Your Categories Name',

            required: true,
          },
        },
      ];
    }
  }
  async fetchDataForEdit() {
    // var res =
    var res: any = await this.adminservice.getSinglecat(this.id).toPromise();
    console.log('res : ', res);
    this.data = res[0];
    this.model = {
      name: this.data.name,
      id: this.data.id,
    };
    this.fields = [
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
  }

  async onSubmit() {
    if (this.form.valid) {
      var res = await this.adminservice.addCategory(this.model).toPromise();
      // routing and swal doest work here even thought the data is registered succesfully
      if (res) {
        this.router.navigate(['admin/categories']);
        Swal.fire(
          'Successfully created',
          'User Created Sucessfully',
          'success'
        );
      } else {
        //error
      }
    } else {
      console.log('error');
      Swal.fire('Not saved', 'There was error saving your data', 'error');
    }
  }

  async onUpdate() {
    console.log("iside : ",this.model);
    if (this.form.valid) {
      var res = await this.adminservice.updateCategory(this.model).toPromise();
      // routing and swal doest work here even thought the data is registered succesfully
      if (res) {
        Swal.fire(
          'Successfully updated',
          'User Updated Sucessfully',
          'success'
        );
        this.router.navigate(['admin/categories']);
      } else {
        //error
      }
    } else {
      console.log('error');
      Swal.fire('Not saved', 'There was error saving your data', 'error');
    }
  }
}

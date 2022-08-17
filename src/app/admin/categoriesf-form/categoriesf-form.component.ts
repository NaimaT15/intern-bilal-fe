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
    var res: any = await this.adminservice
      .getSinglePhotoBased(this.id)
      .toPromise();
    console.log('res : ', res);
    this.model = {
      name: this.data.name,
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
      var res = await this.adminservice
        .addCategory(this.form.value)
        .toPromise();
      // routing and swal doest work here even thought the data is registered succesfully
      if (res.statuscode == 200) {
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
    }
  }
}

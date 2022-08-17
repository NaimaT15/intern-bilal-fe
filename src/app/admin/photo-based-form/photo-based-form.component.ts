import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    }
  }

  async fetchDataForEdit() {
    // var res =
    var res: any = await this.adminservice
      .getSinglePhotoBased(this.id)
      .toPromise();
    console.log('res : ', res);
    this.data = res[0];
    this.model = {
      name: this.data.name,
      code: this.data.code,
      description: this.data.description,
      category: this.data.category,
      id: this.data.id,
    };
    this.fields = [
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
  }
  fields: FormlyFieldConfig[] = [];

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

  async onSubmitUpdate() {
    console.log(this.model);
    if (this.form.valid) {
      if (this.model.image) {
        if (
          this.model.image.length != null &&
          this.model.image.length != undefined
        ) {
          this.model.image = this.model.image[0];
        }
        // var res = await this.adminservice
        //   .updatePhotoBasedWithImage(this.model)
        //   .toPromise();
        // console.log('res : ', res);
        // if (res) {
        //   Swal.fire('Successfully created', 'Succesfully Submited', 'success');
        //   this.router.navigate(['admin/photos']);
        //   return console.log('sucess');
        // } else {
        //   console.log(res.body.message);
        // }
      } else {
        console.log('with out image');
        var res = await this.adminservice
          .updatePhotoBasedWithOutImage(this.model)
          .toPromise();
        if (res) {
          Swal.fire('Successfully created', 'Succesfully Submited', 'success');
          this.router.navigate(['admin/photos']);
          return console.log('sucess');
        } else {
          console.log(res.body.message);
        }
      }
    } else {
      console.log('In Vaild Form  Values');
    }
  }
}

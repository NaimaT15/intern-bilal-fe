import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

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
  constructor() {}

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
      type: 'input',
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
    {
      key: 'role',
      type: 'file',
      templateOptions: {
        label: 'Enter Role',
        required: true,
      },
    },
  ];
  onSubmit() {
    console.log('wow');
  }
}

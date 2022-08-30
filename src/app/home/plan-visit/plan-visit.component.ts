import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-plan-visit',
  templateUrl: './plan-visit.component.html',
  styleUrls: ['./plan-visit.component.scss'],
})
export class PlanVisitComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  loading: boolean = false;
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
      key: 'Phone',
      type: 'input',
      templateOptions: {
        label: 'Phone Number',
        type: 'number',
        placeholder: 'Enter Your Phone Number',
        required: true,
      },
    },
    {
      key: 'number',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'Date',
        placeholder: 'Enter Guest Number',
        required: true,
      },
    },
    {
      key: 'date',
      type: 'input',
      templateOptions: {
        type: 'datetime-local',
        label: 'Date',
        placeholder: 'Enter Date',
        required: true,
      },
    },
    {
      key: 'remark',
      type: 'input',
      templateOptions: {
        label: 'Remark',
        placeholder: 'Enter your remarks',
      },
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.form.value);
  }
}

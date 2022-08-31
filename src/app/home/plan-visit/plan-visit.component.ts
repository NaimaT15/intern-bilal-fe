import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { AdminService } from 'src/app/admin/admin.service';
import Swal from 'sweetalert2';

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
      key: 'phone_number',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'Phone Number',
        placeholder: 'Enter Your Phone Number',
        required: true,
      },
    },
    {
      key: 'noOfVisitor',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'No of Visitors',
        placeholder: 'Enter Guest Number',
        required: true,
      },
    },
    {
      key: 'visit_date',
      type: 'input',
      templateOptions: {
        type: 'date',
        label: 'Date',
        placeholder: 'Enter Date',
        required: true,
      },
    },
    {
      key: 'visit_time',
      type: 'input',
      templateOptions: {
        type: 'time',
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
  constructor(private adminservice: AdminService, private router: Router) {}

  ngOnInit(): void {}

  async onSubmit() {
    if (this.form.valid) {
      const res = await this.adminservice.addDonater(this.model).toPromise();
      if ((res.statuscode = 200)) {
        this.router.navigate(['/']);
        Swal.fire('Successfully created', 'Plan saved Sucessfully', 'success');
      } else {
        console.log(res.er);
      }
    } else {
      // form no vaild
    }
  }
}

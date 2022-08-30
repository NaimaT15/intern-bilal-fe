import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {
  ModalDismissReasons,
  NgbModal,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { AdminService } from 'src/app/admin/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss'],
})
export class DonationComponent implements OnInit {
  closeResult = '';
  name = '';
  modalOptions: NgbModalOptions;
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
  ];
  onChange(data: string, name: string) {
    this.name = data;
  }
  constructor(
    private modalService: NgbModal,
    private adminservice: AdminService,
    private router: Router
  ) {
    this.modalOptions = {
      backdrop: false,
      // backdropClass: 'customBackdrop',
      size: 'xl',
      centered: true,
    };
  }
  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  ngOnInit(): void {}
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  async onSubmit() {
    if (this.form.valid) {
      var res = await this.adminservice.addUser(this.model).toPromise();

      if ((res.statuscode = 200)) {
        this.router.navigate(['admin/users']);
        Swal.fire(
          'Successfully created',
          'User Created Sucessfully',
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

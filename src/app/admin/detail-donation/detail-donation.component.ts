import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import Swal from 'sweetalert2';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-detail-donation',
  templateUrl: './detail-donation.component.html',
  styleUrls: ['./detail-donation.component.scss'],
})
export class DetailDonationComponent implements OnInit {
  isType: any = null;
  id: any = null;
  item: any = null;
  type: boolean = true;

  constructor(
    private adminservice: AdminService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      console.log('type', queryParams['type']);
      console.log('id', queryParams['id']);
      this.isType = queryParams['type'];
      this.id = queryParams['id'];
    });
  }

  async ngOnInit(): Promise<void> {
    this.isType = this.activatedRoute.snapshot.queryParamMap.get('type');
    this.id = this.activatedRoute.snapshot.queryParamMap.get('id');
    if (this.isType != null && this.isType == 'donation') {
      this.type = false;
      this.adminservice
        .getSingleDonater(this.id)
        .subscribe((ele) => (this.item = ele));
    } else if (this.isType != null && this.isType == 'visitor') {
      this.type = true;
      this.adminservice
        .getSingleVisitor(this.id)
        .subscribe((ele) => (this.item = ele));
      console.log('item', this.item);
    } else {
      Swal.fire({
        title: 'item not found',
        text: 'try again',
        icon: 'warning',
      });
      this.router.navigate(['admin']);
    }
  }

  async fetchDataForVisitor() {
    var res: any = await this.adminservice
      .getSingleVisitor(this.id)
      .toPromise();
    console.log(res[0]);
    this.item = res[0];
  }
}

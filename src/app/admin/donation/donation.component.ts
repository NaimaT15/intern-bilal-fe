import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss'],
})
export class DonationComponent implements OnInit {
  donations: any = [];
  tableName = 'Donation List';
  constructor(private adminservice: AdminService) {}

  ngOnInit(): void {
    this.adminservice
      .donations()
      .subscribe((don: any) => (this.donations = don));
  }
}

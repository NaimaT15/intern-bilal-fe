import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
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
  onDelete(data: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.adminservice
          .deleteDonater(data)
          .subscribe(
            () =>
              (this.donations = this.donations.filter(
                (t: any) => t.id !== this.donations.id
              ))
          );
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        this.donations = this.donations.filter((t: any) => t.id !== data.id);
      }
    });
  }
}

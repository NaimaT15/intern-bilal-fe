import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-visitors',
  templateUrl: './visitors.component.html',
  styleUrls: ['./visitors.component.scss'],
})
export class VisitorsComponent implements OnInit {
  visitors: any = [];
  tableName = 'Visitors';
  constructor(private adminservice: AdminService) {}

  ngOnInit(): void {
    const rest = this.adminservice
      .visitors()
      .subscribe((visit: any) => (this.visitors = visit));
  }

  getChangedDate(date: string) {
    // var tem = date.toString();
    var tem = date.substring(0, date.length - 3);
    return tem;
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
          .deleteVisitor(data)
          .subscribe(
            () =>
              (this.visitors = this.visitors.filter(
                (t: any) => t.id !== this.visitors.id
              ))
          );
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        this.visitors = this.visitors.filter((t: any) => t.id !== data.id);
      }
    });
  }
}

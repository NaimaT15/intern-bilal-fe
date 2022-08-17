import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AdminService, USER } from '../admin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: USER[] = [];
  tableName = 'Users';
  constructor(private adminservice: AdminService) {}

  ngOnInit(): void {
    this.adminservice.getUsers().subscribe((users) => (this.users = users));
  }

  onDelete(user: USER) {
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
          .deleteUser(user)
          .subscribe(
            () => (this.users = this.users.filter((t) => t.id !== user.id))
          );
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        this.users = this.users.filter((t) => t.id !== user.id);
      }
    });
  }
}

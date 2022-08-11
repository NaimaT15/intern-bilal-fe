import { Component, OnInit } from '@angular/core';
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
}

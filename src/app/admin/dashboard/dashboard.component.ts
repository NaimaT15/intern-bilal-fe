import { Component, OnInit } from '@angular/core';
import { AdminService, Photo } from '../admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  photos: Photo[] = [];
  constructor(private adminservice: AdminService) {}

  ngOnInit(): void {
    this.adminservice.getPhoto().subscribe((photos) => (this.photos = photos));
  }
}

import { Component, OnInit } from '@angular/core';
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
}

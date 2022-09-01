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

  getChangedDate(date:string){
    // var tem = date.toString();
    var tem = date.substring(0,date.length-3);
    return tem;
  }
}

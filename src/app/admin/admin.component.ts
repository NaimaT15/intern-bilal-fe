import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public show:boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onShowChange($event:any){
    this.show = !this.show;
    console.log("even : ",$event);
  }

}

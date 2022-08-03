import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() show = new EventEmitter<any>();
  setShow:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  togglerMenu(){
    this.setShow = !this.setShow;
    this.show.emit(this.setShow);
  }

}

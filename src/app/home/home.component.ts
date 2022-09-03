import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AdminService, Category, Photo } from '../admin/admin.service';
import { HomeService } from './home.service';
import { MyDialogComponent } from './my-dialog/my-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  className: string | undefined;

  photos: Photo[] = [];
  categoryNames: any[] = [];
  cats: Category[] = [];

  // closeDialog() {
  //    this.dialogRef.close();
  //  }
  data = {
    imageUrl: '',
    description: '',
    category: '',
    name: '',
  };
  // imageUrl: string = '';
  // description: string = '';
  modalOptions: NgbModalOptions | undefined;
  count: any[] = [];


  constructor(
    private service: HomeService,
    private modalService: NgbModal,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.modalOptions = {
      fullscreen: true,
      backdrop: false,
      centered: true,
      animation: true,
      size: 'xl',
      scrollable: true,
      // backdropClass: 'customBackdrop',
    };
  }

  ngOnInit(): void {
    this.service.getHomeCategory(4).subscribe((data:any)=>{
      var all: any[] = [];
      data.forEach((ele:any)=>{
        ele.data.forEach((ele:any)=>{
          all.push(ele);
        })
      })
      this.photos = all;
    })
  }

  openCompDialog(data: any) {
    var passData = {
      data: this.photos,
      selected: data,
    };
    const myCompDialog = this.dialog.open(MyDialogComponent, {
      panelClass: 'fullscreen-dialog',
      data: passData,
    });
    myCompDialog.afterClosed().subscribe((res) => {
      // Data back from dialog
      console.log({ res });
    });
  }

  getLink(link: any) {
    return link.photo_url;
  }

  getLinkOf(ph: Photo) {
    return ph.photo;
  }

  close() {
    this.modalService.dismissAll();
  }
  open(content: any, data: any) {
    this.data.category = data.category;
    this.data.imageUrl = data.imageUrl;
    this.data.description = data.description;
    this.data.name = data.name;
    console.log('data : ', data);
    // this.modalService.open(content, this.modalOptions).result.then();
    this.modalService.open(content, this.modalOptions);
  }
  hasRoute(route: string) {
    return this.router.url === route;
  }
  getCategoryName(id: any) {
    var res: any = this.categoryNames.filter((ele) => ele.id === id);
    return res[0].name;
  }

}

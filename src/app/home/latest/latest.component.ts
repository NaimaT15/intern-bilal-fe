import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AdminService, Category, Photo } from 'src/app/admin/admin.service';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./latest.component.scss'],
})
export class LatestComponent implements OnInit {
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
  modalOptions: NgbModalOptions;
  count: any[] = [];
  // public dialogRef: MatDialogRef<MyDialogComponent>
  // category: any;
  constructor(
    private adminservice: AdminService,
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

  async ngOnInit(): Promise<any> {
    var res = await this.adminservice.getCategories().toPromise();
    if (res) {
      res.forEach((ele) => {
        this.categoryNames.push(ele);
      });
    }
    this.adminservice.getCategories().subscribe((cat) => (this.cats = cat));
    this.adminservice.getPhoto().subscribe((photos: any) => {
      this.photos = photos;
      console.log('data  :', photos);
    });
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

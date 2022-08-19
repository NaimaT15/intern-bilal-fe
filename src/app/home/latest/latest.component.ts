import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AdminService, Category, Photo } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./latest.component.scss'],
})
export class LatestComponent implements OnInit {
  photos: Photo[] = [];
  cats: Category[] = [];
  imageUrl: string = '';
  description: string = '';
  modalOptions: NgbModalOptions;
  count: any[] = [];
  category: any;
  constructor(
    private adminservice: AdminService,
    private modalService: NgbModal,
    private router: Router
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

  ngOnInit(): any {
    this.adminservice.getCategories().subscribe((cat) => (this.cats = cat));
    this.adminservice.getPhoto().subscribe((photos: any) => {
      this.photos = photos;
      console.log('data  :', photos);
    });
  }
  getLink(link: any) {
    // console.log("link : ",link.photo_url);
    return link.photo_url;
  }

  open(content: any, data: any) {
    this.imageUrl = data.photo_url;
    this.description = data.description;
    this.category = data.category;

    // this.modalService.open(content, this.modalOptions).result.then();
    this.modalService.open(content, this.modalOptions);
  }
  hasRoute(route: string) {
    return this.router.url === route;
  }
}

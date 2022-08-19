import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { AdminService, Photo } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./latest.component.scss'],
})
export class LatestComponent implements OnInit {
  photos: Photo[] = [];
  imageUrl: string = '';
  description: string = '';
  modalOptions: NgbModalOptions;
  count: any[] = [];
  category: any;
  constructor(
    private adminservice: AdminService,
    private modalService: NgbModal
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

  async ngOnInit(): Promise<void> {
    this.adminservice.getPhoto().subscribe((photos: any) => {
      this.photos = photos;
      console.log('data  :', photos);
    });

    var res = await this.adminservice.getCategories().toPromise();
    if (res) {
      this.count = [{ name: 'All', id: 0 }];
      res.forEach((ele: any) => {
        this.count.push(ele);
      });
      console.log('res : ', this.count);
    }
    console.log('res : ', res);
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
}

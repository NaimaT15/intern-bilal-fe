import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { AdminService, Photo } from '../admin.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent implements OnInit {
  photos: Photo[] = [];
  tableName = 'Artifact';
  imageUrl: string = '';
  modalOptions: NgbModalOptions;
  constructor(
    private adminservice: AdminService,
    private modalService: NgbModal
  ) {
    this.modalOptions = {
      backdrop: false,
      // backdropClass: 'customBackdrop',
    };
  }

  ngOnInit(): void {
    this.adminservice.getPhoto().subscribe((photos) => {
      this.photos = photos;
      console.log('data  :', photos);
    });
  }
  onDelete(ph: Photo) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.adminservice
          .deletephoto(ph)
          .subscribe(
            () => (this.photos = this.photos.filter((t) => t.id !== ph.id))
          );
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        this.photos = this.photos.filter((t) => t.id !== ph.id);
        // this.cats = this.cats.filter((t) => t.id !== cat.id)
      }
    });
  }

  getLink(link: any) {
    // console.log("link : ",link.photo_url);
    return link.photo_url;
  }

  openModal() {
    // const modalRef = this.modalService.open(ModalContentComponent);
    // modalRef.componentInstance.user = this.user;
  }

  open(content: any, data: any) {
    this.imageUrl = data.photo_url;
    this.modalService.open(content, this.modalOptions).result.then();
  }
}

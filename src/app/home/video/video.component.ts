import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminService, Video } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  videos: Video[] = [];
  videoLink:string = "";
  constructor(
    private adminservice: AdminService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.adminservice.videos().subscribe((video: any) => (this.videos = video));
  }

  open(content: any,v:any) {
    this.videoLink = v.video_url;
    // console.log("link : ",v);
    this.modalService
      .open(content, {size:'lg'})
      .result.then(
        (result) => {
          // this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}

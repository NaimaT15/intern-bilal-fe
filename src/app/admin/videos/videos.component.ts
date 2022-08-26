import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AdminService, Video } from '../admin.service';
@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent implements OnInit {
  vids: Video[] = [];
  tableName = 'Video';
  constructor(private adminservice: AdminService) {}

  ngOnInit(): void {
    this.adminservice.videos().subscribe((vid: any) => (this.vids = vid));
  }
  onDelete(vid: Video) {
    try {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            var res = await this.adminservice.deleteVideo(vid).toPromise();
            this.vids = this.vids.filter((t) => t.id !== vid.id);
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
          } catch (er) {
            this.vids = this.vids.filter((t) => t.id !== vid.id);
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
          }
        }
      });
    } catch (er) {
      Swal.fire('Oops!', 'Sorry there was an error.', 'error');
    }
  }
}

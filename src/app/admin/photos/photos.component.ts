import { Component, OnInit } from '@angular/core';
import { AdminService, Photo } from '../admin.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent implements OnInit {
  photos: Photo[] = [];
  tableName = 'Artifact';
  constructor(private adminservice: AdminService) {}

  ngOnInit(): void {
    this.adminservice.getPhoto().subscribe((photos) => (this.photos = photos));
  }
  onDelete(ph: Photo) {
    this.adminservice
      .deletephoto(ph)
      .subscribe(
        () => (this.photos = this.photos.filter((t) => t.id !== ph.id))
      );
  }
}

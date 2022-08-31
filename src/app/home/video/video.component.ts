import { Component, OnInit } from '@angular/core';
import { AdminService, Video } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
})
export class VideoComponent implements OnInit {
  videos: Video[] = [];
  constructor(private adminservice: AdminService) {}

  ngOnInit(): void {
    this.adminservice.videos().subscribe((video: any) => (this.videos = video));
  }
}

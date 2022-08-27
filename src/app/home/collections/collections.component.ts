import { Component, OnInit } from '@angular/core';
import { AdminService, Photo } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss'],
})
export class CollectionsComponent implements OnInit {
  search: boolean = true;
  photos: Photo[] = [];
  filterdPhotos: Photo[] = [];
  searchText: string = '';
  constructor(private adminservice: AdminService) {}
  onChange(data: string) {
    this.searchText = data;
  }

  ngOnInit() {
    this.adminservice.getPhoto().subscribe((photos: any) => {
      this.photos = photos;
      console.log('data  :', photos);
    });

    // this.photos.filter(
    //   (item) =>
    //     item.name.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1
    // );
  }

  // this.adminservice.getPhoto().subscribe((photos: any) => {
  //   this.photos = photos;
  //   console.log('data  :', photos);
  // });

  getLink(link: any) {
    return link.photo_url;
  }
  searchResult() {
    this.search = !this.search;
    console.log(this.photos);
    var result: any[] = this.photos.filter(
      (item) =>
        item.name.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1
    );
    this.search = !this.search;
    console.log(result);
  }
}

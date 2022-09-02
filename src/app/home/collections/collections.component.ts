import { Component, OnInit } from '@angular/core';
import { AdminService, Photo } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss'],
})
export class CollectionsComponent implements OnInit {
  search: boolean = false;
  photos: Photo[] = [];
  filterdPhotos: Photo[] = [];
  searchText: string = '';
  pageSize:number = 10;
  page:number = 1;
  totalItems:number = 100;

  constructor(private adminservice: AdminService) {}
  onChange(data: string) {
    this.searchText = data;
    if (this.searchText.length > 0) {
      this.search = true;
    } else {
      this.search = false;
    }
  }

  ngOnInit() {
    
    
    // this.adminservice.getListWithPaginator(this.pageSize,this.page).subscribe((data:any)=>{
    //   // console.log("data new : ",data);
    //   this.photos = data.results;
    // })
    // this.adminservice.getPhoto().subscribe((photos: any) => {
    //   this.photos = photos;
    //   console.log('data  :', photos);
    // });

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
    console.log(this.photos);
    var result: any[] = this.photos.filter(
      (item) =>
        item.name.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1
    );

    return result;
  }
}

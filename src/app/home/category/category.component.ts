import { Component, OnInit } from '@angular/core';
import { AdminService, Category, Photo } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  cats: Category[] = [];
  photos: Photo[] = [];
  filertedPhotots: any[] = [];
  constructor(private adminservice: AdminService) {}

  ngOnInit(): void {
    this.adminservice.getCategories().subscribe((cat) => (this.cats = cat));
    this.adminservice.getPhoto().subscribe((photo) => (this.photos = photo));
  }
  getAll() {
    return this.photos;
  }
  get(cat: any) {
    console.log(
      this.filertedPhotots.filter(
        (cat) => (this.photos = this.photos.filter((t) => t.id !== cat))
      )[0].name
    );
    return this.filertedPhotots.filter(
      (cat) => (this.photos = this.photos.filter((t) => t.id !== cat))
    )[0].name;
  }
}

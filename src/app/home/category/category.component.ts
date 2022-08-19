import { Component, OnInit } from '@angular/core';
import { AdminService, Category } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  cats: Category[] = [];
  constructor(private adminservice: AdminService) {}

  ngOnInit(): void {
    this.adminservice.getCategories().subscribe((cat) => (this.cats = cat));
  }
  getAll() {}
}

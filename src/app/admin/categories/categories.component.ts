import { Component, OnInit } from '@angular/core';
import { AdminService, Category } from '../admin.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  cats: Category[] = [];
  tableName = 'Catogries';
  constructor(private adminservice: AdminService) {}

  ngOnInit(): void {
    this.adminservice.getCategories().subscribe((cat) => (this.cats = cat));
  }
}

import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
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
  onDelete(cat: Category) {
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
          try{
            var res = await this.adminservice.deleteCat(cat).toPromise();
            this.cats = this.cats.filter((t) => t.id !== cat.id);
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
          }catch(er){
            this.cats = this.cats.filter((t) => t.id !== cat.id);
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
          }
        }
      });
    } catch (er) {
      Swal.fire('Oops!', 'Sorry there was an error.', 'error');
    }
  }
}

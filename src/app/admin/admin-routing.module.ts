import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesfFormComponent } from './categoriesf-form/categoriesf-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PhotoBasedFormComponent } from './photo-based-form/photo-based-form.component';
import { PhotosComponent } from './photos/photos.component';
import { UserformComponent } from './userform/userform.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: 'categories',
        component: CategoriesComponent,
      },
      {
        path: 'photos',
        component: PhotosComponent,
      },
      {
        path: 'adduser',
        component: UserformComponent,
      },
      {
        path: 'addph',
        component: PhotoBasedFormComponent,
      },
      {
        path: 'add-cat',
        component: CategoriesfFormComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

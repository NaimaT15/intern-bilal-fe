import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesfFormComponent } from './categoriesf-form/categoriesf-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DonationComponent } from './donation/donation.component';
import { PhotoBasedFormComponent } from './photo-based-form/photo-based-form.component';
import { PhotosComponent } from './photos/photos.component';
import { UserformComponent } from './userform/userform.component';
import { UsersComponent } from './users/users.component';
import { ViderFormComponent } from './video-form/video-form.component';
import { VideosComponent } from './videos/videos.component';

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
        path: 'donation',
        component: DonationComponent,
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
      {
        path: 'addvid',
        component: ViderFormComponent,
      },
      {
        path: 'videos',
        component: VideosComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}

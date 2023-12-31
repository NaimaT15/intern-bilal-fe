import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { FormlyModule } from '@ngx-formly/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { UserformComponent } from './userform/userform.component';
import { PhotoBasedFormComponent } from './photo-based-form/photo-based-form.component';
import { CategoriesfFormComponent } from './categoriesf-form/categoriesf-form.component';
import { FileValueAccessor } from './file-value/file-value.accessor';
import { UsersComponent } from './users/users.component';
import { FooterComponent } from './footer/footer.component';
import { PhotosComponent } from './photos/photos.component';
import { CategoriesComponent } from './categories/categories.component';
import { FormlyFieldFile } from './file-value/file-value.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ViderFormComponent } from './video-form/video-form.component';
import { VideosComponent } from './videos/videos.component';
import { DonationComponent } from './donation/donation.component';
import { VisitorsComponent } from './visitors/visitors.component';
import { DetailDonationComponent } from './detail-donation/detail-donation.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    SidebarComponent,
    HeaderComponent,
    UserformComponent,
    PhotoBasedFormComponent,
    CategoriesfFormComponent,
    PhotoBasedFormComponent,
    FileValueAccessor,
    UsersComponent,
    FooterComponent,
    PhotosComponent,
    CategoriesComponent,
    FormlyFieldFile,
    ViderFormComponent,
    VideosComponent,
    DonationComponent,
    VisitorsComponent,
    DetailDonationComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FormlyModule.forRoot({
      types: [
        {
          name: 'file',
          component: FormlyFieldFile,
          wrappers: ['form-field'],
        },
      ],
      validationMessages: [
        {
          name: 'required',
          message: 'This field is required',
        },
      ],
    }),
    FormlyBootstrapModule,
    MatTabsModule,
    MatProgressSpinnerModule,
  ],
})
export class AdminModule {}

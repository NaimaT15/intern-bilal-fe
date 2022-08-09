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
import { FileValueAccessor } from './photo-based-form/photo-based-form.accessor';

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
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FormlyModule.forRoot({
      validationMessages: [
        {
          name: 'required',
          message: 'This field is required',
        },
      ],

      types: [
        {
          name: 'file',
          component: PhotoBasedFormComponent,
          wrappers: ['form-field'],
        },
      ],
    }),
    FormlyBootstrapModule,
  ],
})
export class AdminModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CategoriesfFormComponent } from './categoriesf-form/categoriesf-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PhotoBasedFormComponent } from './photo-based-form/photo-based-form.component';
import { UserformComponent } from './userform/userform.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      // {
      //   path: 'adduser',
      //   component: UserformComponent,
      // },
      // {
      //   path: 'addcollection',
      //   component: PhotoBasedFormComponent,
      // },
      // {
      //   path: 'add-cat',
      //   component: CategoriesfFormComponent,
      // },
      {
        path: 'adduser',
        component: UserformComponent,
      },
      {
        path: 'addcollection',
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

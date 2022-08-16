import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescriptionComponent } from './home/description/description.component';
import { ExiptionComponent } from './home/exiption/exiption.component';
import { VisitComponent } from './home/visit/visit.component';

import { HomeComponent } from './home/home.component';
import { LatestComponent } from './home/latest/latest.component';

import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CategoryComponent } from './home/category/category.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'visit',
    component: VisitComponent,
  },
  { path: 'whats', component: ExiptionComponent },
  { path: 'collection', component: CategoryComponent },

 

  { path: 'view', component: DescriptionComponent },

 

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

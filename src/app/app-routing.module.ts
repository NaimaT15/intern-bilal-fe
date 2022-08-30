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
import { DonationComponent } from './home/donation/donation.component';
import { PriceComponent } from './home/price/price.component';
import { VideoComponent } from './home/video/video.component';
import { PlanVisitComponent } from './home/plan-visit/plan-visit.component';

const routes: Routes = [
  { path: 'whats', component: CategoryComponent },
  { path: 'collection', component: CategoryComponent },

  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  { path: 'video', component: VideoComponent },

  { path: 'view', component: DescriptionComponent },
  {
    path: 'plan-visit',
    component: PlanVisitComponent,
  },
  {
    path: 'visit',
    component: VisitComponent,
  },
  { path: 'price', component: PriceComponent },

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
    path: 'contact',
    component: DonationComponent,
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

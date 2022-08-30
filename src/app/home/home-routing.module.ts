import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { CategoryComponent } from './category/category.component';
import { CollectionsComponent } from './collections/collections.component';
import { DescriptionComponent } from './description/description.component';
import { DonationComponent } from './donation/donation.component';
import { HomeComponent } from './home.component';
import { PlanVisitComponent } from './plan-visit/plan-visit.component';
import { PriceComponent } from './price/price.component';
import { VideoComponent } from './video/video.component';
import { VirtualTourComponent } from './virtual-tour/virtual-tour.component';
import { VisitComponent } from './visit/visit.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'virtual',
        component: VirtualTourComponent,
      },
      { path: 'whats', component: CategoryComponent },
      { path: 'collection', component: CategoryComponent },
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
        path: 'contact',
        component: DonationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

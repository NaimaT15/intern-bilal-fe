import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsComponent } from './collections/collections.component';
import { HomeComponent } from './home.component';
import { VirtualTourComponent } from './virtual-tour/virtual-tour.component';

import { VisitComponent } from './visit/visit.component';

import { ExiptionComponent } from './exiption/exiption.component';
import { LatestComponent } from './latest/latest.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'collections',
        component: CollectionsComponent,
      },
      {
        path: 'virtual',
        component: VirtualTourComponent,
      },

      { path: 'visit', component: VisitComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

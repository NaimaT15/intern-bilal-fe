import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CollectionsComponent } from './collections/collections.component';
import { VirtualTourComponent } from './virtual-tour/virtual-tour.component';
import { HeaderComponent } from './header/header.component';
import { LatestComponent } from './latest/latest.component';


@NgModule({
  declarations: [
    HomeComponent,
    CollectionsComponent,
    VirtualTourComponent,
    HeaderComponent,
    LatestComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

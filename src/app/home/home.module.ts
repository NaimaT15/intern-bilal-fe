import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CollectionsComponent } from './collections/collections.component';
import { VirtualTourComponent } from './virtual-tour/virtual-tour.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LatestComponent } from './latest/latest.component';
import { VisitComponent } from './visit/visit.component';

@NgModule({
  declarations: [
    HomeComponent,
    CollectionsComponent,
    VirtualTourComponent,
    HeaderComponent,
    FooterComponent,
    LatestComponent,
    VisitComponent,
  ],
<<<<<<< HEAD
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports:[
HeaderComponent,
FooterComponent
  ]
=======
  imports: [CommonModule, HomeRoutingModule],
>>>>>>> a68ddc284438719d03b118722a68d2a6ae8fc9cc
})
export class HomeModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AgmCoreModule } from '@agm/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CollectionsComponent } from './collections/collections.component';
import { VirtualTourComponent } from './virtual-tour/virtual-tour.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LatestComponent } from './latest/latest.component';
import { VisitComponent } from './visit/visit.component';
import { ExiptionComponent } from './exiption/exiption.component';
import { DescriptionComponent } from './description/description.component';
import { CategoryComponent } from './category/category.component';
import { DonationComponent } from './donation/donation.component';
// import { GoogleMapsModule } from "angular/google-maps";

@NgModule({
  declarations: [
    HomeComponent,
    CollectionsComponent,
    VirtualTourComponent,
    HeaderComponent,
    FooterComponent,
    LatestComponent,
    VisitComponent,
    ExiptionComponent,
    DescriptionComponent,
    CategoryComponent,
    DonationComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AI   zaSyCCseUfKPCqLWApllfFAP1XUdOvv3VcG7M',
    // }),
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class HomeModule {}

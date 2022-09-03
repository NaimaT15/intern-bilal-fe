import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
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
import { PriceComponent } from './price/price.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { VideoComponent } from './video/video.component';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { PlanVisitComponent } from './plan-visit/plan-visit.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxPaginationModule } from 'ngx-pagination';
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
    DonationComponent,
    PriceComponent,
    VideoComponent,
    PlanVisitComponent,
    MyDialogComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatDialogModule,
    FormsModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),
    FormlyBootstrapModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    NgxPaginationModule
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class HomeModule {}

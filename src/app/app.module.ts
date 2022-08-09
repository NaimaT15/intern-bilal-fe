import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { ExiptionComponent } from './home/exiption/exiption.component';
import { HomeModule } from './home/home.module';
import { DescriptionComponent } from './description/description.component';



@NgModule({
  declarations: [AppComponent, LoginComponent, NotFoundComponent, ExiptionComponent, DescriptionComponent, ],
  imports: [BrowserModule,FormsModule,HttpClientModule, AppRoutingModule,  NgbModule, HomeModule,],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { ExiptionComponent } from './home/exiption/exiption.component';
import { HomeModule } from './home/home.module';
import { DescriptionComponent } from './description/description.component';



@NgModule({
  declarations: [AppComponent, LoginComponent, NotFoundComponent, ExiptionComponent, DescriptionComponent, ],
  imports: [BrowserModule,FormsModule,HttpClientModule, AppRoutingModule,  NgbModule, HomeModule,],

=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ExiptionComponent } from './exiption/exiption.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormlyModule } from '@ngx-formly/core';


@NgModule({
  declarations: [AppComponent, LoginComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
  ],
>>>>>>> a68ddc284438719d03b118722a68d2a6ae8fc9cc
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

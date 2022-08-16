import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormlyModule } from '@ngx-formly/core';

import { DescriptionComponent } from './home/description/description.component';
import { FooterComponent } from './home/footer/footer.component';
import { HeaderComponent } from './home/header/header.component';
import { HomeComponent } from './home/home.component';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { ModalContainerComponent } from './modal-container/modal-container.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, NotFoundComponent, ModalContentComponent, ModalContainerComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    // FormlyModule.forRoot(),
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent, HomeComponent, HeaderComponent],
})
export class AppModule {}

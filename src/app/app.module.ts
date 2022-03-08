import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { HomeComponent } from './components/home/home.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { DigitalmarketingComponent } from './components/digitalmarketing/digitalmarketing.component';
import { WebdesigningComponent } from './components/webdesigning/webdesigning.component';
import { MobileapplicationComponent } from './components/mobileapplication/mobileapplication.component';
import { ManteiohomeComponent } from './components/manteiohome/manteiohome.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { MpracticumComponent } from './components/mpracticum/mpracticum.component';
import { Arvr3dComponent } from './components/arvr3d/arvr3d.component';
import { AIchatbotComponent } from './components/aichatbot/aichatbot.component';
import {ContactusService} from './services/contactus.service';
import { EcommerceComponent } from './components/ecommerce/ecommerce.component';
import { CareersComponent } from './components/careers/careers.component';
import { DMcourseComponent } from './components/dmcourse/dmcourse.component';
import { BAcourseComponent } from './components/bacourse/bacourse.component';
import { IoscourseComponent } from './components/ioscourse/ioscourse.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { MsafehomeComponent } from './components/msafehome/msafehome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { HashLocationStrategy, LocationStrategy  } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    HomeComponent,
    ContactusComponent,
    DigitalmarketingComponent,
    WebdesigningComponent,
    MobileapplicationComponent,
    ManteiohomeComponent,
    IndustriesComponent,
    MpracticumComponent,
    Arvr3dComponent,
    AIchatbotComponent,
    EcommerceComponent,
    CareersComponent,
    DMcourseComponent,
    BAcourseComponent,
    IoscourseComponent,
    MsafehomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ModalDialogModule.forRoot(),
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  exports: [HomeComponent],
  providers: [ContactusService,
  ],
  // providers: [ContactusService, {provide : LocationStrategy , useClass: HashLocationStrategy},
  // ],
  bootstrap: [AppComponent],
})
export class AppModule { }

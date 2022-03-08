import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../app/components/home/home.component';
import {AboutusComponent} from '../app/components/aboutus/aboutus.component';
import {ContactusComponent} from '../app/components/contactus/contactus.component';
import {DigitalmarketingComponent} from '../app/components/digitalmarketing/digitalmarketing.component';
import {MobileapplicationComponent} from '../app/components/mobileapplication/mobileapplication.component';
import {WebdesigningComponent} from '../app/components/webdesigning/webdesigning.component';
import {ManteiohomeComponent} from '../app/components/manteiohome/manteiohome.component';
import {IndustriesComponent} from '../app/components/industries/industries.component';
import {Arvr3dComponent} from '../app/components/arvr3d/arvr3d.component';
import {AIchatbotComponent} from '../app/components/aichatbot/aichatbot.component';
import {MpracticumComponent} from '../app/components/mpracticum/mpracticum.component';
import {EcommerceComponent} from '../app/components/ecommerce/ecommerce.component';
import {CareersComponent} from '../app/components/careers/careers.component';
import {BAcourseComponent} from '../app/components/bacourse/bacourse.component';
import {DMcourseComponent} from '../app/components/dmcourse/dmcourse.component';
import {IoscourseComponent} from '../app/components/ioscourse/ioscourse.component';
import {MsafehomeComponent} from '../app/components/msafehome/msafehome.component'
const routes: Routes = [
  { path: "", component: ManteiohomeComponent,
  children: [
    { path: "", component: HomeComponent},
    { path: "home", component: HomeComponent},
    { path: "aboutus", component: AboutusComponent},
    { path: "contactus", component: ContactusComponent },
    { path: "digitalmarketing", component: DigitalmarketingComponent },
    { path: "mobileapplication", component: MobileapplicationComponent },
    { path: "webdesigning", component: WebdesigningComponent },
    { path: "industries", component: IndustriesComponent },
    { path: "arvr3d", component: Arvr3dComponent },
    { path: "aichatbot", component: AIchatbotComponent },
    { path: "mpracticum", component: MpracticumComponent },
    { path: "ecommerce", component: EcommerceComponent },
    { path: "careers", component: CareersComponent },
    { path: "bacourse", component: BAcourseComponent },
    { path: "dmcourse", component: DMcourseComponent },
    { path: "ioscourse", component: IoscourseComponent },
    { path: "msafehome", component: MsafehomeComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

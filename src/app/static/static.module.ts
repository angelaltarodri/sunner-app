import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLandingComponent } from './main-landing/main-landing.component';
import { StaticRoutingModule } from './static-routing.module';
import { HeaderComponent } from './main-landing/components/header/header.component';
import { WelcomeComponent } from './main-landing/components/welcome/welcome.component';
import { DestinyComponent } from './main-landing/components/destiny/destiny.component';
import { ProjectsComponent } from './main-landing/components/projects/projects.component';
import { FooterComponent } from './main-landing/components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { CallusComponent } from './main-landing/components/callus/callus.component';
import { SaveEnergyLandingComponent } from './save-energy-landing/save-energy-landing.component';
import { SaveEnergyFormComponent } from './save-energy-landing/components/save-energy-form/save-energy-form.component';
import { WhySunnerComponent } from './save-energy-landing/components/why-sunner/why-sunner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material/material.module';
import { ThankYouPageComponent } from './save-energy-landing/components/thank-you-page/thank-you-page.component';
import { ResidencialLandingComponent } from './residencial-landing/residencial-landing.component';
import { CtaComponent } from './residencial-landing/components/cta/cta.component';
import { PasosComponent } from './residencial-landing/components/pasos/pasos.component';
import { OfrecemosComponent } from './residencial-landing/components/ofrecemos/ofrecemos.component';
import { FaqComponent } from './residencial-landing/components/faq/faq.component';
import { ProyectosComponent } from './residencial-landing/components/proyectos/proyectos.component';
import { VerMasDialogComponent } from './residencial-landing/components/proyectos/ver-mas-dialog/ver-mas-dialog.component';

@NgModule({
  declarations: [
    MainLandingComponent,
    HeaderComponent,
    WelcomeComponent,
    DestinyComponent,
    ProjectsComponent,
    FooterComponent,
    CallusComponent,
    SaveEnergyLandingComponent,
    SaveEnergyFormComponent,
    WhySunnerComponent,
    ThankYouPageComponent,
    ResidencialLandingComponent,
    CtaComponent,
    PasosComponent,
    OfrecemosComponent,
    FaqComponent,
    ProyectosComponent,
    VerMasDialogComponent,
  ],
  imports: [
    StaticRoutingModule,
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
  ],
})
export class StaticModule {}

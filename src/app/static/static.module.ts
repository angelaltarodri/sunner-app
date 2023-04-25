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
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

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
  ],
  imports: [
    StaticRoutingModule,
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class StaticModule {}

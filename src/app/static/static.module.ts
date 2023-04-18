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

@NgModule({
  declarations: [
    MainLandingComponent,
    HeaderComponent,
    WelcomeComponent,
    DestinyComponent,
    ProjectsComponent,
    FooterComponent,
    CallusComponent,
  ],
  imports: [StaticRoutingModule, CommonModule, SharedModule],
})
export class StaticModule {}

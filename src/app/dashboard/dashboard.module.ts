import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { BaseComponent } from './pages/base/base.component';
import { ChartsModule } from 'ng2-charts';
import { GraficoLinearComponent } from './components/grafico-linear/grafico-linear.component';


@NgModule({
  declarations: [
    BaseComponent,
    GraficoLinearComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartsModule
  ]
})
export class DashboardModule { }

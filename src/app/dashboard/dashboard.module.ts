import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { BaseComponent } from './pages/base/base.component';
import { ChartsModule } from 'ng2-charts';
import { GraficoComponent } from './pages/base/grafico/grafico.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GraficoHorasComponent } from './pages/base/grafico/grafico-horas/grafico-horas.component';
import { GraficoDiasComponent } from './pages/base/grafico/grafico-dias/grafico-dias.component';
import { GraficoMesesComponent } from './pages/base/grafico/grafico-meses/grafico-meses.component';
import { GraficoAniosComponent } from './pages/base/grafico/grafico-anios/grafico-anios.component';

@NgModule({
  declarations: [
    BaseComponent,
    GraficoComponent,
    GraficoHorasComponent,
    GraficoDiasComponent,
    GraficoMesesComponent,
    GraficoAniosComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartsModule,
    ReactiveFormsModule,
  ],
})
export class DashboardModule {}

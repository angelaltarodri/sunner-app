import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLandingComponent } from './main-landing/main-landing.component';
import { SaveEnergyLandingComponent } from './save-energy-landing/save-energy-landing.component';
import { ResidencialLandingComponent } from './residencial-landing/residencial-landing.component';
import { BonoVerdeLandingComponent } from './bono-verde-landing/bono-verde-landing.component';
import { ThanksResidencialComponent } from './thanks-residencial/thanks-residencial.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ResidencialLandingComponent,
      },
      {
        path: 'ahorra',
        component: SaveEnergyLandingComponent,
      },
      {
        path: 'bono-verde',
        component: BonoVerdeLandingComponent,
      },
      {
        path: 'thanks',
        component: ThanksResidencialComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaticRoutingModule {}

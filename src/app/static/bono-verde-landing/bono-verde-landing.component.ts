import { Component } from '@angular/core';
import { RangoPagoMensual } from '../save-energy-landing/interfaces/rango-pago-mensual.interface';

@Component({
  selector: 'app-bono-verde-landing',
  templateUrl: './bono-verde-landing.component.html',
  styleUrls: ['./bono-verde-landing.component.scss'],
})
export class BonoVerdeLandingComponent {
  thankYou: boolean = false;
  rangoPagoMensual: string = '';

  recibirEnergyForm(rangoPagoMensual: string) {
    this.rangoPagoMensual = rangoPagoMensual;
    this.thankYou = !this.thankYou;
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { RangoPagoMensual } from '../../interfaces/rango-pago-mensual.interface';

@Component({
  selector: 'app-thank-you-page',
  templateUrl: './thank-you-page.component.html',
  styleUrls: ['./thank-you-page.component.scss'],
})
export class ThankYouPageComponent implements OnInit {
  @Input() datosRangoPagoMensual: RangoPagoMensual[] = [];
  @Input() rangoPagoMensual: string = '';

  rangoSeleccionado!: RangoPagoMensual;

  weWorking: boolean = false;

  ngOnInit(): void {
    const rangoSeleccionado = this.datosRangoPagoMensual.find(
      (rango) => rango.nombre === this.rangoPagoMensual
    )!;

    if (rangoSeleccionado.nombre === '0 a 250') {
      this.weWorking = true;
    }

    this.rangoSeleccionado = rangoSeleccionado;
  }
}

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

  ngOnInit(): void {
    console.log(this.datosRangoPagoMensual);
    console.log(this.rangoPagoMensual);
    this.rangoSeleccionado = this.datosRangoPagoMensual.find(
      (rango) => rango.nombre === this.rangoPagoMensual
    )!;
  }
}

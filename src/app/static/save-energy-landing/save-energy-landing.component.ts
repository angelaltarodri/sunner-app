import { Component, OnInit } from '@angular/core';
import { RangoPagoMensual } from './interfaces/rango-pago-mensual.interface';

@Component({
  selector: 'app-save-energy-landing',
  templateUrl: './save-energy-landing.component.html',
  styleUrls: ['./save-energy-landing.component.scss'],
})
export class SaveEnergyLandingComponent implements OnInit {
  thankYou: boolean = false;
  rangoPagoMensual: string = '';

  datosRangoPagoMensual: RangoPagoMensual[] = [
    {
      nombre: '0 a 250',
      sistemakw: 0,
      paneles: 0,
      co2: 0,
      dinero: 0,
      arboles: 0,
    },
    {
      nombre: '250 a 650',
      sistemakw: 1,
      paneles: 2,
      co2: 400,
      dinero: 187,
      arboles: 2,
    },

    {
      nombre: '650 a 1000',
      sistemakw: 2,
      paneles: 4,
      co2: 800,
      dinero: 373,
      arboles: 5,
    },
    {
      nombre: '1000 a 1350',
      sistemakw: 3,
      paneles: 6,
      co2: 1200,
      dinero: 560,
      arboles: 7,
    },
    {
      nombre: '1350 a 1700',
      sistemakw: 4,
      paneles: 8,
      co2: 1600,
      dinero: 747,
      arboles: 9,
    },
    {
      nombre: '1700+',
      sistemakw: 5,
      paneles: 10,
      co2: 2000,
      dinero: 933,
      arboles: 12,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    if (document.referrer) console.log(document.referrer);
  }

  recibirEnergyForm(rangoPagoMensual: string) {
    this.rangoPagoMensual = rangoPagoMensual;
    this.thankYou = !this.thankYou;
  }
}

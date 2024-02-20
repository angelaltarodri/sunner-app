import { Component } from '@angular/core';

@Component({
  selector: 'app-thanks-residencial',
  templateUrl: './thanks-residencial.component.html',
  styleUrls: ['./thanks-residencial.component.scss'],
})
export class ThanksResidencialComponent {
  openWhatsapp() {
    const number = '+51970370625';
    2;
    const message = 'Hola Sunner, estoy interesado en sistemas solares 👷🏽👷🏾‍♀️⚡';
    window.open(
      `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(
        message
      )}`
    );
  }
}

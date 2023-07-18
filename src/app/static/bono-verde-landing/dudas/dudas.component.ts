import { Component } from '@angular/core';

@Component({
  selector: 'app-dudas',
  templateUrl: './dudas.component.html',
  styleUrls: ['./dudas.component.scss'],
})
export class DudasComponent {
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

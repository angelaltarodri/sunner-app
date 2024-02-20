import { Component } from '@angular/core';

@Component({
  selector: 'app-thanks-inmob',
  templateUrl: './thanks-inmob.component.html',
  styleUrls: ['./thanks-inmob.component.scss'],
})
export class ThanksInmobComponent {
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

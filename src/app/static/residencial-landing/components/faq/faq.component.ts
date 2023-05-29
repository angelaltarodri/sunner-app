import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent {
  isCheckedMap: { [key: string]: boolean } = {};

  closeRadio(event: any, id: string) {
    this.isCheckedMap[id] = !this.isCheckedMap[id];
  }

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

import { Component } from '@angular/core';

@Component({
  selector: 'app-destiny',
  templateUrl: './destiny.component.html',
  styleUrls: ['./destiny.component.scss'],
})
export class DestinyComponent {
  // xStart: number = window.innerWidth;
  xStart: number = 0;
  items = [
    {
      titulo: 'MISIÓN',
      subtitulo: 'Renovar el consumo energético <br> de nuestros clientes.',
      backgroundImage: 'assets/static/main-landing/sunner-destiny.png',
    },
    {
      titulo: 'VISIÓN',
      subtitulo: 'Revolucionar el mercado <br> energético Latinoamericano. ',
      backgroundImage: 'assets/static/main-landing/sunner-destiny.png',
    },
  ];
}

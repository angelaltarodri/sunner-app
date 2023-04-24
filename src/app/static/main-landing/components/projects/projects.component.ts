import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  xStart: number = window.innerWidth;
  // xStart: number = 0;
  items = [
    {
      titulo: '',
      subtitulo: '',
      backgroundImage: 'assets/static/main-landing/p-magdalena.webp',
    },
    {
      titulo: '',
      subtitulo: '',
      backgroundImage: 'assets/static/main-landing/p-casuarinas.webp',
    },
    {
      titulo: '',
      subtitulo: '',
      backgroundImage: 'assets/static/main-landing/p-marsano.webp',
    },
  ];
  itemsMobile = [
    {
      titulo: '',
      subtitulo: '',
      backgroundImage: 'assets/static/main-landing/p-magdalena-m.webp',
    },
    {
      titulo: '',
      subtitulo: '',
      backgroundImage: 'assets/static/main-landing/p-casuarinas-m.webp',
    },
    {
      titulo: '',
      subtitulo: '',
      backgroundImage: 'assets/static/main-landing/p-marsano-m.webp',
    },
  ];
}

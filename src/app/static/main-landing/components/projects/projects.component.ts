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
      backgroundImage: 'assets/static/main-landing/p-magdalena.png',
    },
    {
      titulo: '',
      subtitulo: '',
      backgroundImage: 'assets/static/main-landing/p-casuarinas.png',
    },
    {
      titulo: '',
      subtitulo: '',
      backgroundImage: 'assets/static/main-landing/p-marsano.png',
    },
  ];
  itemsMobile = [
    {
      titulo: '',
      subtitulo: '',
      backgroundImage: 'assets/static/main-landing/p-magdalena-m.png',
    },
    {
      titulo: '',
      subtitulo: '',
      backgroundImage: 'assets/static/main-landing/p-casuarinas-m.png',
    },
    {
      titulo: '',
      subtitulo: '',
      backgroundImage: 'assets/static/main-landing/p-marsano-m.png',
    },
  ];
}

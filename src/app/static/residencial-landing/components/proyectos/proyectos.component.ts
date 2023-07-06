import { Component, ElementRef, ViewChild } from '@angular/core';
import { VerMasDialogComponent } from './ver-mas-dialog/ver-mas-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss'],
})
export class ProyectosComponent {
  @ViewChild('carouselViewport') carouselViewport!: ElementRef;
  currentIndex = 0;

  constructor(private dialog: MatDialog) {}

  proyectos = [
    {
      nombre: 'Casuarinas',
      energiaTotal: '366.10',
      ahorroMonetario: '256.27',
      ahorroEmisiones: '169.83',
      urlImagen:
        './../../../../../../assets/static/residencial-landing/casuarinas.webp',
    },
    {
      nombre: 'Magdalena',
      energiaTotal: '356.10',
      ahorroMonetario: '246.27',
      ahorroEmisiones: '159.83',
      urlImagen:
        './../../../../../../assets/static/residencial-landing/magdalena.webp',
    },
    {
      nombre: 'Marsano',
      energiaTotal: '346.10',
      ahorroMonetario: '236.27',
      ahorroEmisiones: '149.83',
      urlImagen:
        './../../../../../../assets/static/residencial-landing/marsano.webp',
    },
  ];

  anterior() {
    this.currentIndex = (this.currentIndex - 1 + 3) % 3;
    this.scrollCarousel();
  }

  siguiente() {
    this.currentIndex = (this.currentIndex + 1) % 3;
    this.scrollCarousel();
  }

  scrollCarousel() {
    const carouselViewportElement: HTMLElement =
      this.carouselViewport.nativeElement;
    const slideWidth = carouselViewportElement.offsetWidth;
    carouselViewportElement.scrollLeft = slideWidth * this.currentIndex;
  }

  getNombreProyectoActual() {
    return this.proyectos[this.currentIndex].nombre;
  }

  openVerMas() {
    const data = {
      proyecto: this.proyectos[this.currentIndex],
    };

    const verMasDialog = this.dialog.open(VerMasDialogComponent, {
      width: '95vw',
      data: data,
      backdropClass: 'backdropBackground',
    });
  }
}

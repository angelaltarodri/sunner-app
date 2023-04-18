import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  // Los items a mostrar
  @Input() items: any[] = [];
  // el ancho de cada elemento
  @Input() liwidth: string = '100%';
  // el alto de cada elemento
  @Input() liheight: string = '300px';
  // la posicion de inicio en el eje x
  @Input() xStart: number = 0;
  // la posición acomodada de los elementos al momento de hacer scroll
  @Input() positionScroll: string = 'center';
  // el tiempo en milisegundos que se tarda en mover de elemento
  @Input() timerMS: number = 3000;
  // la separación entre elementos
  @Input() cgap: string = '0px';
  // activar la posibilidad de mover con el touch
  @Input() coverflow: string = 'auto';

  @ViewChild('carousel', { static: false }) carouselContent!: ElementRef;
  cont: number = 0;

  ngAfterViewInit() {
    this.carouselContent.nativeElement.scrollLeft = this.xStart;
  }

  ngOnInit(): void {
    const source = interval(this.timerMS);
    source.subscribe(() => {
      const carouselChildren = this.carouselContent.nativeElement.children;
      const wli = Number(
        getComputedStyle(carouselChildren[0])
          .getPropertyValue('width')
          .split('px')[0]
      );
      if (
        carouselChildren[this.cont].getBoundingClientRect().x < 1 ||
        carouselChildren[this.cont].getBoundingClientRect().x > 1
      ) {
        this.carouselContent.nativeElement.scrollLeft = wli * (this.cont + 1);
        if (this.cont !== carouselChildren.length - 1) {
          this.cont = this.cont + 1;
        } else {
          this.cont = 0;
          this.carouselContent.nativeElement.scrollLeft = 0;
        }
      }
    });
  }
}

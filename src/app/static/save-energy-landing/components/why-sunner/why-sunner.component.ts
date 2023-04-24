import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-why-sunner',
  templateUrl: './why-sunner.component.html',
  styleUrls: ['./why-sunner.component.scss'],
})
export class WhySunnerComponent {
  public fadeInLeft: HTMLElement[];

  constructor() {
    this.fadeInLeft = [];
  }
  ngOnInit(): void {
    this.fadeInLeft = Array.from(document.querySelectorAll('.why-sunner-item'));
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const windowHeight = window.innerHeight;
    const elementVisible = 50;

    this.fadeInLeft.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const isElementPresent = windowHeight - elementTop;
      if (isElementPresent > 0 && isElementPresent > elementVisible) {
        element.classList.add('why-sunner-fade_items');
      }
    });
  }
}

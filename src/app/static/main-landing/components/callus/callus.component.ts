import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-callus',
  templateUrl: './callus.component.html',
  styleUrls: ['./callus.component.scss'],
})
export class CallusComponent implements OnInit {
  // Animations
  public fadeInDown: HTMLElement[];
  public fadeIn: HTMLElement[];

  constructor() {
    this.fadeInDown = [];
    this.fadeIn = [];
  }
  ngOnInit(): void {
    this.fadeInDown = Array.from(document.querySelectorAll('.fadeInDown'));
    this.fadeIn = Array.from(document.querySelectorAll('.fadeIn'));
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const windowHeight = window.innerHeight;
    const elementVisible = 50;

    this.fadeInDown.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const isElementPresent = windowHeight - elementTop;
      if (isElementPresent > 0 && isElementPresent > elementVisible) {
        element.classList.add('animate__fadeInDown');
      }
    });

    this.fadeIn.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const isElementPresent = windowHeight - elementTop;
      if (isElementPresent > 0 && isElementPresent > elementVisible) {
        element.classList.add('animate__fadeIn');
      }
    });
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

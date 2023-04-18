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

    this.fadeIn.forEach((element) => {
      element.classList.remove('animate__fadeOutDown');
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const windowHeight = window.innerHeight;
    const elementVisible = 50;
    this.fadeInDown.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      element.classList.add('animate__fadeInDown');
    });

    this.fadeIn.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;

      element.classList.add('animate__fadeIn');
    });
  }
}

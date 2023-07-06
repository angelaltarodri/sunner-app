import { Component, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogFormComponent } from './components/dialog-form/dialog-form.component';

@Component({
  selector: 'app-residencial-landing',
  templateUrl: './residencial-landing.component.html',
  styleUrls: ['./residencial-landing.component.scss'],
})
export class ResidencialLandingComponent {
  private hasExecuted = false; // Bandera para verificar si la función ya se ejecutó

  constructor(private dialog: MatDialog) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    if (!this.hasExecuted) {
      this.showPopUpForm();
    }
  }

  showPopUpForm() {
    const windowHeight = window.innerHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const landingElement = document.querySelector('.residencial-landing');

    if (landingElement instanceof HTMLElement) {
      const landingHeight = landingElement?.offsetHeight;

      if (scrollTop > (landingHeight - windowHeight) / 2) {
        const formDialog = this.dialog.open(DialogFormComponent, {
          width: '90vw',
          backdropClass: 'dialogFormpBackground',
        });

        this.hasExecuted = true;
      }
    }
  }
}

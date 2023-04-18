import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component, OnInit } from '@angular/core';
import { PopUpContactoComponent } from 'src/app/shared/components/pop-up-contacto/pop-up-contacto.component';

@Component({
  selector: 'app-main-landing',
  templateUrl: './main-landing.component.html',
  styleUrls: ['./main-landing.component.scss'],
})
export class MainLandingComponent implements OnInit {
  constructor(private overlay: Overlay) {}

  ngOnInit(): void {
    // const overlayRef = this.overlay.create({
    //   hasBackdrop: true,
    //   positionStrategy: this.overlay
    //     .position()
    //     .global()
    //     .centerHorizontally()
    //     .centerVertically(),
    // });
    // const dialogPortal = new ComponentPortal(PopUpContactoComponent);
    // overlayRef.attach(dialogPortal);
    // overlayRef.backdropClick().subscribe(() => overlayRef.detach());
  }
}

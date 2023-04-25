import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PopUpContactoComponent } from './components/pop-up-contacto/pop-up-contacto.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [CarouselComponent, PopUpContactoComponent],
  imports: [CommonModule, MaterialModule],
  exports: [CarouselComponent],
})
export class SharedModule {}

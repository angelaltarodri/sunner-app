import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DialogModule } from '@angular/cdk/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    DialogModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSnackBarModule,
    DialogModule,
    MatDialogModule,
    MatProgressBarModule,
    MatSliderModule,
  ],
})
export class MaterialModule {}

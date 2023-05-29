import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DialogModule } from '@angular/cdk/dialog';
import { MatDialogModule } from '@angular/material/dialog';
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
  ],
})
export class MaterialModule {}

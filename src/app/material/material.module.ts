import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { DialogModule } from '@angular/cdk/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  declarations: [],
  exports: [CommonModule, DialogModule, MatSelectModule, MatFormFieldModule],
})
export class MaterialModule {}

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-thank-you',
  templateUrl: './thank-you.component.html',
  styleUrls: ['./thank-you.component.scss'],
})
export class ThankYouComponent {
  constructor(
    public dialogRef: MatDialogRef<ThankYouComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}

import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ver-mas-dialog',
  templateUrl: './ver-mas-dialog.component.html',
  styleUrls: ['./ver-mas-dialog.component.scss'],
})
export class VerMasDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<VerMasDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-live-form-dialog',
  templateUrl: './live-form-dialog.component.html',
  styleUrls: ['./live-form-dialog.component.css'],
})
export class LiveFormDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LiveFormDialogComponent>) {}

  ngOnInit(): void {}

  cancelar(): void {
    this.dialogRef.close();
  }
}

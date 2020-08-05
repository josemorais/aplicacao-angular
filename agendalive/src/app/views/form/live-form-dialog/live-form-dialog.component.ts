import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-live-form-dialog',
  templateUrl: './live-form-dialog.component.html',
  styleUrls: ['./live-form-dialog.component.css'],
})
export class LiveFormDialogComponent implements OnInit {
  public liveForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<LiveFormDialogComponent>,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.liveForm = this.fb.group({
      liveName: ['', [Validators.required]],
      channelName: ['', [Validators.required]],
      liveLink: ['', [Validators.required]],
      liveDate: ['', [Validators.required]],
      liveTime: ['', [Validators.required]],
    });
  }

  cancelar(): void {
    this.dialogRef.close();
  }
}

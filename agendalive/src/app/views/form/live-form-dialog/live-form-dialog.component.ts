import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LiveService } from 'src/app/shared/service/live.service';

@Component({
  selector: 'app-live-form-dialog',
  templateUrl: './live-form-dialog.component.html',
  styleUrls: ['./live-form-dialog.component.css'],
})
export class LiveFormDialogComponent implements OnInit {
  public liveForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<LiveFormDialogComponent>,
    private liveService: LiveService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.liveForm = this.fb.group({
      liveName: ['', [Validators.required]],
      channelName: ['', [Validators.required]],
      liveLink: ['', [Validators.required]],
      liveDate: ['2020-08-05T19:39:44', [Validators.required]],
      liveTime: ['', [Validators.required]],
    });
  }

  saveLive(): void {
    this.liveService.saveLives(this.liveForm.value).subscribe((response) => {
      console.log(response);
      this.dialogRef.close();
      this.liveForm.reset();
    });
  }

  cancelar(): void {
    this.dialogRef.close();
    this.liveForm.reset();
  }
}

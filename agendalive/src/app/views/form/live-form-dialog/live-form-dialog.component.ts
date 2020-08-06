import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LiveService } from 'src/app/shared/service/live.service';

import * as moment from 'moment';

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
      liveDate: ['', [Validators.required]],
      liveTime: ['', [Validators.required]],
    });
  }

  saveLive(): void {
    const newDate: moment.Moment = moment
      .utc(this.liveForm.value.liveDate)
      .local();
    this.liveForm.value.liveDate =
      newDate.format('YYYY-MM-DD') + 'T' + this.liveForm.value.liveTime;

    this.liveService.saveLives(this.liveForm.value).subscribe((response) => {
      console.log(response);
      this.dialogRef.close();
      this.liveForm.reset();
      window.location.reload();
    });
  }

  cancelar(): void {
    this.dialogRef.close();
    this.liveForm.reset();
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LiveListComponent } from 'src/app/views/home/live-list/live-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { HomeComponent } from 'src/app/views/home/home.component';
import { LiveFormDialogComponent } from 'src/app/views/form/live-form-dialog/live-form-dialog.component';
import { LocalDateTimePipe } from '../../pipe/local-date-time.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    LiveListComponent,
    LiveFormDialogComponent,
    LocalDateTimePipe,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    FlexLayoutModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [LocalDateTimePipe],
})
export class HomeModule {}

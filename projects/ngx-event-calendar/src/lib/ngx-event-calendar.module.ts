import { NgModule } from '@angular/core';
import { NgxEventCalendarComponent } from './ngx-event-calendar.component';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NgxEventCalendarComponent],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule
  ],
  exports: [NgxEventCalendarComponent]
})
export class NgxEventCalendarModule { }

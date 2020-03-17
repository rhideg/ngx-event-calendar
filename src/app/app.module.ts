import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarComponent } from './calendar/calendar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { NgxEventCalendarModule } from 'projects/ngx-event-calendar/src/public-api';
import { EventDialogComponent } from './dialog/event-dialog/event-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AddEventDialogComponent } from './dialog/add-event-dialog/add-event-dialog.component';
import { FormsModule } from '@angular/forms';
import { EditEventDialogComponent } from './dialog/edit-event-dialog/edit-event-dialog.component';
import {MatDatepickerModule, } from '@angular/material/datepicker';


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    EventDialogComponent,
    AddEventDialogComponent,
    EditEventDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule, 
    NgxEventCalendarModule,
    MatDialogModule,
    MatDividerModule,
    MatDatepickerModule,
    FormsModule,
    MatNativeDateModule,
    HammerModule
  ],
  entryComponents: [
    EventDialogComponent,
    AddEventDialogComponent,
    EditEventDialogComponent
  ],
  exports: [
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

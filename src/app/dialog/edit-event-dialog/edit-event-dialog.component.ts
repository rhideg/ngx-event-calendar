import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import { formatDate } from '@angular/common';
import { hours } from 'src/app/calendar/Localization/hours';
import { minutes } from 'src/app/calendar/Localization/minutes';
import { IEventData } from 'src/app/calendar/Interface/IEventData';
import { colours } from 'src/app/calendar/Localization/colours';

@Component({
  selector: 'app-edit-event-dialog',
  templateUrl: './edit-event-dialog.component.html',
  styleUrls: ['./edit-event-dialog.component.scss']
})
export class EditEventDialogComponent implements OnInit {

  previousStartHours;
  startDate;
  startHours;
  startMinutes;
  endDate:string;
  endHours;
  endMinutes;
  title:string;
  desc:string;
  createdBy:string;
  color:string;
  hours;
  minutes;
  colours;
  editEvent = {} as IEventData;


  constructor(
    public dialogRef: MatDialogRef<EditEventDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    
/*    this.previousStartHours = formatDate(this.data.startDate, 'hh', 'en');
    this.endDate = formatDate(this.data.endDate, ' MMMM. dd hh:mm', 'en'); */
  
    this.editEvent.startDate = this.data.startDate;
    this.editEvent.startDate.setHours(0, 0, 0, 0);
    this.editEvent.endDate = this.data.endDate;
    this.editEvent.endDate.setHours(0, 0, 0, 0);

    this.editEvent.title = this.data.title;
    this.editEvent.desc = this.data.desc;
    this.editEvent.createdBy = this.data.createdBy;
    this.editEvent.color = this.data.color;
    this.hours = hours;
    this.minutes = minutes;
    this.colours = colours;
  }

  btn_SaveChangesClick() {

  this.editEvent.startDate.setHours(this.startHours, this.startMinutes);
  this.editEvent.endDate.setHours(this.endHours, this.endMinutes);
  
  this.dialogRef.close(EditEventDialogComponent);

  }

}

import { Component, OnInit } from '@angular/core';
import { hours} from '../../calendar/Localization/hours'
import { minutes} from '../../calendar/Localization/minutes'
import { IEventData } from 'src/app/calendar/Interface/IEventData';
import { MatDialogRef } from '@angular/material/dialog';
import { EventDialogComponent } from '../event-dialog/event-dialog.component';
import { colours } from 'src/app/calendar/Localization/colours';

@Component({
  selector: 'app-add-event-dialog',
  templateUrl: './add-event-dialog.component.html',
  styleUrls: ['./add-event-dialog.component.scss']
})
export class AddEventDialogComponent implements OnInit {

  startDate;
  startHours;
  startMinutes;
  endDate;
  endHours;
  endMinutes;
  hours:any;
  minutes:any;
  colours;
  newEvent = {} as IEventData;

  constructor(public dialogRef: MatDialogRef<EventDialogComponent>) { }

  ngOnInit() {
    this.hours = hours;
    this.minutes = minutes;
    this.colours = colours;
  }

  btn_SaveClick() {

    this.startDate.setHours(this.startDate.getHours() + this.startHours)
    this.startDate.setMinutes(this.startDate.getMinutes() + this.startMinutes)

    this.endDate.setHours(this.endDate.getHours() + this.endHours)
    this.endDate.setMinutes(this.endDate.getMinutes() + this.endMinutes);
    
    this.newEvent.startDate = this.startDate;
    this.newEvent.endDate = this.endDate;

    this.dialogRef.close(AddEventDialogComponent);
    
  }

}

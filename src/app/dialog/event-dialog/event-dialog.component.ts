import { Component, OnInit, Inject } from "@angular/core";
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import { AddEventDialogComponent } from '../add-event-dialog/add-event-dialog.component';
import { EditEventDialogComponent} from '../edit-event-dialog/edit-event-dialog.component';

import { formatDate } from '@angular/common';

@Component({
  selector: "app-event-dialog",
  templateUrl: "./event-dialog.component.html",
  styleUrls: ["./event-dialog.component.scss"]
})
export class EventDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EventDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog
  ) {}

  ngOnInit() {}

  addEvent() {
    const dialogRef1 = this.dialog.open(AddEventDialogComponent, {
      width: '80%',
      height: '90%',
      data: event
    });
  }

  editEvent(data) {
    const dialogRef2 = this.dialog.open(EditEventDialogComponent, {
      width: '80%',
      height: '90%',
      data: data
    });
  }

  createICS() {

    //Ics NPM
    const ics = require('ics');

    //Map event for ics format
    let icsEvent = this.data.events.map( event => {
      const mapEvent = {
        start : formatDate(new Date(event.startDate), 'yyyy,MM,dd,HH,mm', 'en').split(',').map(Number),
        end : formatDate(new Date(event.endDate), 'yyyy,MM,dd,HH,mm', 'en').split(',').map(Number),
        title : event.title,
        description : event.desc,
      }

      return mapEvent

    })

    const { error, value } = ics.createEvents(icsEvent)
     
    if (error) {
      //console.log(error)
    }

    //Stream file
    const blob = new Blob([value], { type: 'text/calendar' });
    const url= window.URL.createObjectURL(blob);
    
    window.open(url);
  }
}

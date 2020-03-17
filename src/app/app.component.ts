import { Component } from '@angular/core';
import { IEventData } from './calendar/Interface/IEventData';
import { testData } from './calendar/DataSource/testData';
import { MatDialog } from '@angular/material/dialog';
import { EventDialogComponent } from './dialog/event-dialog/event-dialog.component';

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'de-calendar';
  language: string = 'en';
  dataArray: IEventData[] = testData;

  constructor(public dialog: MatDialog) { }

  addEvent(event) {
    alert(event);
  }

  dayEvents(event) {
  }

  selectDay(event) {

    if (event.events) {
      const dialogRef = this.dialog.open(EventDialogComponent, {
        width: '80%',
        height: '90%', 
        data: event
      });
    }

    //dialogRef.afterClosed().subscribe(result => {
    //  console.log('The dialog was closed');
    //this.animal = result;
    //});
  }



}

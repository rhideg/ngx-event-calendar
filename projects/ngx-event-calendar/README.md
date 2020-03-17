# Angular Event Calendar

⚡ Try it on [StackBlitz](https://stackblitz.com/edit/angular-ksfahu?file=src%2Fapp%2Fapp.component.ts)

### Desktop:
![calendar-ui](https://i.ibb.co/vm9dtkD/calendar-ui.png)
### Mobile:
![calendar-ui](https://i.ibb.co/bLYD4Dp/calendar-ui-mobile.png)


# Getting started
***
## Installation:
Install via npm package manager
```npm i ngx-event-calendar```

(Uses the angular [material module](https://material.angular.io/) for icons.)

### Prerequisites:
``` bash
  npm i -s @angular/flex-layout
  ```
 ``` bash
  ng add @angular/material
  ```

## Usage:

### Module:
Import ```ngx-event-calendar```
``` javascript
import {NgxEventCalendarModule} from 'ngx-event-calendar';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatSelectModule, MatIconModule, MatDividerModule, MatNativeDateModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [ NgxEventCalendarModule,
             BrowserModule,
             FormsModule,
             MatFormFieldModule,
             MatInputModule,
             MatSelectModule,
             MatIconModule,
             MatDividerModule,
             MatButtonModule,
             BrowserAnimationsModule,
             FlexLayoutModule,
             NgxEventCalendarModule, ]
})
```

### HTML:
Add ```ngx-event-calendar```
``` html
<ngx-event-calendar [dataSource]="dataArray"> 
</ngx-event-calendar>
```

### TypeScript:
``` javascript
import { EventData } from 'ngx-event-calendar/lib/interface/event-data';
...
dataArray: EventData[] = testData;
```

## Models:
***

### Day:
``` javascript
export interface Day {
    day: number;
    month: number;
    year: number;
    events: any[];
}
```

### Events:
``` javascript
export interface EventData {
  id: number;
  title: string;
  desc?: string;
  startDate: Date;
  endDate: Date;
  createdBy?: string;
  createdAt?: Date;
  type?: number;
  color?: string;
}
```

### DataSource:
``` javascript 
Event[]
```

## Parameters and methods:
***
``` html
<ngx-event-calendar 
    [showAddButton]="true" // Show the add new event button
    [language]="'en'" // Default is hungarian
    [dataSource]="dataArray" // Required
    (dayEvents)="selectDay($event)" // Returns an object that contains the selected date and the array of events
    (newEvent)="addEvent($event") // Add event button click
    > 
</ngx-event-calendar>
```

``` javascript
 selectDay(event) {
    console.log(event);
 }
// event:
{   
    day: 8
    month: 10
    year: 2019
    events: Array(1)
        0: { id: 20, title: 'Match', desc: 'BL Match',
  startDate: new Date("2019-11-22T21:00:00"), endDate: new Date("2019-11-26T23:00:00"), createdBy: 'Daniel',
  createdAt: new Date("2019-11-10T10:00:00"), type: 2, color: 'red' },
}
```
import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, OnChanges } from '@angular/core';
import { formatDate } from '@angular/common';
import { mounthsHU } from './Localization/monthsHU';
import { mounthsEN } from './Localization/monthsEN';
import { weekdayEN } from './Localization/weekdaysEN';
import { weekdayHU } from './Localization/weekdaysHU';
import { yearsLabel } from './Localization/years';
import { IEventData } from './Interface/IEventData';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, AfterViewInit, OnChanges {


  isSmall = false;

  today;
  currentMonth;
  currentYear;
  firstDay;
  daysInMonth;
  daysInLastMonth;
  actDay;
  lastMonth;
  actMonth;
  months: any;
  weekdays: any;
  years = [];
  actFullDate;
  actDate: any;
  arrTest = [];
  arrCalendar = [];
  eventsData: any;
  actYear;
  showChangeDate = false;

  @Input() dataSource: IEventData[];
  @Input() language: string;
  @Output() dayEvents = new EventEmitter();
  @Output() newEvent = new EventEmitter();
  constructor() {
    this.today = new Date();
    this.currentMonth = this.today.getMonth();
    this.currentYear = this.today.getFullYear();
    this.years = yearsLabel;

  }

  ngOnInit() {
    this.actFullDate = formatDate(new Date(), 'yyyy. MMMM. dd', 'en');
    this.actDate = formatDate(new Date(), 'yyyy. MMMM', 'en');
    this.actDay = formatDate(new Date(), 'dd', 'en');
    this.actMonth = formatDate(new Date(), 'MM', 'en');
    this.actYear = formatDate(new Date(), 'yyyy', 'en');
    this.eventsData = this.dataSource;
  }

  ngAfterViewInit(): void {
    const height = document.getElementById('cont').offsetHeight;
    const width = document.getElementById('cont').offsetWidth;

    // TODO: if small only show badges not all the events
    if (height <= 600 || width <= 700) {
     // console.log('small');
      this.isSmall = true;
    } else {
      this.isSmall = false;
    }

  }



  ngOnChanges() {
    this.eventsData = this.dataSource;
    this.changeLanguage();
    this.createCalendar();
  }

  createCalendar() {
    this.arrTest = [];
    this.arrCalendar = [];
    this.firstDay = new Date(this.currentYear, this.currentMonth).getUTCDay();
    this.daysInMonth = this.getDaysInMonth(this.currentMonth, this.currentYear);
    this.daysInLastMonth = this.getDaysInMonth(
      this.currentMonth - 1,
      this.currentYear
    );
    const lmd = this.daysInLastMonth - (this.firstDay - 1);

    // Last month days
    for (let index = lmd; index <= this.daysInLastMonth; index++) {
      this.arrTest.push({
        day: index,
        month: this.currentMonth - 1,
        year: this.currentYear,
        events: []
      });
    }

    // Actual month
    for (let index = 1; index <= this.daysInMonth; index++) {
      const filterEvents = this.eventsData.filter(event => {
        return (
          event.startDate.getTime() <=
          new Date(
            this.currentYear,
            this.currentMonth + 1,
            index
          ).getTime() &&
          event.endDate.getTime() >=
          new Date(this.currentYear, this.currentMonth + 1, index).getTime()
        );
      });

      this.arrTest.push({
        day: index,
        month: this.currentMonth,
        year: this.currentYear,
        events: filterEvents
      });


    }

    for (let i = this.arrTest.length, j = 1; i < 42; i++ , j++) {
      this.arrTest.push({
        day: j,
        month: this.currentMonth + 1,
        year: this.currentYear,
        events: []
      });
    }

    for (let i = 0; i < 6; i++) {
      const arrWeek = this.arrTest.splice(0, 7);
      this.arrCalendar.push(arrWeek);
    }

  }

  getDaysInMonth(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth, 32).getDate();
  }

  previousMonthButtonClick() {
    if (this.currentMonth === 0) {
      this.currentYear -= 1;
      this.currentMonth = 11;
    } else {
      this.currentMonth -= 1;
    }

    this.actDate = this.creatActMonthYear();

    this.createCalendar();
  }

  nextMonthButtonClick() {
    if (this.currentMonth === 11) {
      this.currentYear += 1;
      this.currentMonth = 0;
    } else {
      this.currentMonth += 1;
    }

    this.actDate = this.creatActMonthYear();

    this.createCalendar();
  }

  // Dialog test
  // TODO: return the selected value
  openDialog(event) {
    this.dayEvents.next(event);
  }

  changeLanguage() {
    if (!this.language) {
      this.language = 'hu';
      this.months = mounthsHU;
      this.weekdays = weekdayHU;
    }
    if (this.language === 'en') {
      this.months = mounthsEN;
      this.weekdays = weekdayEN;
    } else {
      this.months = mounthsHU;
      this.weekdays = weekdayHU;
    }
  }

  onYearChange(event) {
    this.currentYear = Number(event.target.value);

    this.actDate = this.creatActMonthYear();

    this.createCalendar();
  }

  onMonthChange(event) {
    this.currentMonth = Number(event.target.value);

    this.actDate = this.creatActMonthYear();

    this.createCalendar();
  }

  creatActMonthYear() {
    const actDate = formatDate(
      new Date(this.currentYear, this.currentMonth),
      'yyyy. MMMM',
      'en'
    );

    return actDate;
  }

  addEventClicked() {

    const testMessage = `${this.currentYear}-${this.currentMonth}-${this.actDay}`;
    this.newEvent.next(testMessage);
  }

}

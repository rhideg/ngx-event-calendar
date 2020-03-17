import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxEventCalendarComponent } from './ngx-event-calendar.component';

describe('NgCalendarComponent', () => {
  let component: NgxEventCalendarComponent;
  let fixture: ComponentFixture<NgxEventCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxEventCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxEventCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

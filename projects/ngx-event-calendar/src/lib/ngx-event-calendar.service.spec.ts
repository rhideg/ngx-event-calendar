import { TestBed } from '@angular/core/testing';

import { NgxEventCalendarService } from './ngx-event-calendar.service';

describe('NgCalendarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxEventCalendarService = TestBed.get(NgxEventCalendarService);
    expect(service).toBeTruthy();
  });
});

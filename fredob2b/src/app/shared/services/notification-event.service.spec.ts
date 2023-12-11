import { TestBed } from '@angular/core/testing';

import { NotificationEventService } from './notification-event.service';

describe('NotificationEventService', () => {
  let service: NotificationEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificationEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

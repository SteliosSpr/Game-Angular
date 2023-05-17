import { TestBed } from '@angular/core/testing';

import { UpcomingGameServiceService } from './upcoming-game-service.service';

describe('UpcomingGameServiceService', () => {
  let service: UpcomingGameServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpcomingGameServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { GameScreenshotsServiceService } from './game-screenshots-service.service';

describe('GameScreenshotsServiceService', () => {
  let service: GameScreenshotsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameScreenshotsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

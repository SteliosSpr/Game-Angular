import { TestBed } from '@angular/core/testing';

import { GameDetailsServiceService } from './game-details-service.service';

describe('GameDetailsServiceService', () => {
  let service: GameDetailsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameDetailsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

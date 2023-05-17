import { TestBed } from '@angular/core/testing';

import { GameSearchServiceService } from './game-search-service.service';

describe('GameSearchServiceService', () => {
  let service: GameSearchServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameSearchServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

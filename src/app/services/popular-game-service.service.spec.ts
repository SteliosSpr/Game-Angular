import { TestBed } from '@angular/core/testing';

import { PopularGameServiceService } from './popular-game-service.service';

describe('PopularGameServiceService', () => {
  let service: PopularGameServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopularGameServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

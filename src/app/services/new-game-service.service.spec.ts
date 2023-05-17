import { TestBed } from '@angular/core/testing';

import { NewGameServiceService } from './new-game-service.service';

describe('NewGameServiceService', () => {
  let service: NewGameServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewGameServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

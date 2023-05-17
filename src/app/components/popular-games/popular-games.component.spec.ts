import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularGamesComponent } from './popular-games.component';

describe('PopularGamesComponent', () => {
  let component: PopularGamesComponent;
  let fixture: ComponentFixture<PopularGamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopularGamesComponent]
    });
    fixture = TestBed.createComponent(PopularGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

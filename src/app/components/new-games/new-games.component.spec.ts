import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGamesComponent } from './new-games.component';

describe('NewGamesComponent', () => {
  let component: NewGamesComponent;
  let fixture: ComponentFixture<NewGamesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewGamesComponent]
    });
    fixture = TestBed.createComponent(NewGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

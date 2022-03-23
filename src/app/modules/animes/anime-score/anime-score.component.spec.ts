import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeScoreComponent } from './anime-score.component';

describe('AnimeScoreComponent', () => {
  let component: AnimeScoreComponent;
  let fixture: ComponentFixture<AnimeScoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeScoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimeScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

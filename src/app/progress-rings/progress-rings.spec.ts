import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressRings } from './progress-rings';

describe('ProgressRings', () => {
  let component: ProgressRings;
  let fixture: ComponentFixture<ProgressRings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressRings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressRings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarGuidelinesComponent } from './progress-bar-guidelines.component';

describe('ProgressBarGuidelinesComponent', () => {
  let component: ProgressBarGuidelinesComponent;
  let fixture: ComponentFixture<ProgressBarGuidelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressBarGuidelinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarGuidelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

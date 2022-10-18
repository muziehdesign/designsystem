import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardProgressTrackerComponent } from './wizard-progress-tracker.component';

describe('WizardProgressTrackerComponent', () => {
  let component: WizardProgressTrackerComponent;
  let fixture: ComponentFixture<WizardProgressTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WizardProgressTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardProgressTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

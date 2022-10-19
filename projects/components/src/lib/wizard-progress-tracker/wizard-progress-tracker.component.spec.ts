import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

import { WizardProgressTrackerComponent } from './wizard-progress-tracker.component';

describe('WizardProgressTrackerComponent', () => {
  let component: WizardProgressTrackerComponent;
  let fixture: ComponentFixture<WizardProgressTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CommonModule, WizardProgressTrackerComponent, SvgIconComponent ],
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

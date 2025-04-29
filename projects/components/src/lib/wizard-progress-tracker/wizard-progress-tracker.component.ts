import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WizardStepLink } from '../models/wizard-step-link';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
    selector: 'mz-wizard-progress-tracker',
    templateUrl: './wizard-progress-tracker.component.html',
    styleUrls: ['./wizard-progress-tracker.component.scss'],
    imports: [CommonModule, SvgIconComponent]
})
export class WizardProgressTrackerComponent {
  @Input() steps: WizardStepLink[] = [];
  @Input() currentStep = 0;
  @Output() stepChange = new EventEmitter<WizardStepLink>();
  toggled = true;

  goToStep(step: WizardStepLink) {
    this.stepChange.emit(step);
  }

  toggle(): void {
      this.toggled = !this.toggled;
  }
}

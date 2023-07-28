import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WizardProgressTrackerComponent, WizardStepLink } from 'muzieh-ngcomponents';

@Component({
    selector: 'app-wizard',
    templateUrl: './wizard.component.html',
    styleUrls: ['./wizard.component.scss'],
    standalone: true,
    imports: [WizardProgressTrackerComponent],
})
export class WizardComponent {

    constructor(private router: Router) { }

    currentStep = 2;
    steps: WizardStepLink[] = [
        { route: '/components/pageheader', name: 'Page header' },
        { route: '/components/pagination', name: 'Pagination' },
        { route: '/components/progressbar', name: 'Progress bar' },
        { route: '/components/skeletonloader', name: 'Skeleton loader' },
        { route: '/components/spinner', name: 'Spinner' },
    ];

    stepSelected(step: WizardStepLink) {
      this.router.navigate([step.route]);
    }
}

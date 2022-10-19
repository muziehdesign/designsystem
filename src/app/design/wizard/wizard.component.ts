import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WizardStepLink } from 'muzieh-ngcomponents';

@Component({
    selector: 'app-wizard',
    templateUrl: './wizard.component.html',
    styleUrls: ['./wizard.component.scss'],
})
export class WizardComponent {

    constructor(private router: Router) { }

    currentStep = 2;
    steps: WizardStepLink[] = [
        { route: '/design/pageheader', name: 'Page header' },
        { route: '/design/pagination', name: 'Pagination' },
        { route: '/design/progressbar', name: 'Progress bar' },
        { route: '/design/skeletonloader', name: 'Skeleton loader' },
        { route: '/design/spinner', name: 'Spinner' },
    ];

    stepSelected(step: WizardStepLink) {
      this.router.navigate([step.route]);
    }
}

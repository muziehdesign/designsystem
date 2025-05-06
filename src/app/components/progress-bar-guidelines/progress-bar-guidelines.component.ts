import { Component, OnInit } from '@angular/core';
import { PageLoadingIndicatorComponent } from '@muziehdesign/components';

@Component({
    selector: 'app-progress-bar-guidelines',
    templateUrl: './progress-bar-guidelines.component.html',
    styleUrls: ['./progress-bar-guidelines.component.scss'],
    imports: [PageLoadingIndicatorComponent]
})
export class ProgressBarGuidelinesComponent implements OnInit {
  isLoading: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { PageLoadingIndicatorComponent } from 'muzieh-ngcomponents';

@Component({
  selector: 'app-progress-bar-guidelines',
  templateUrl: './progress-bar-guidelines.component.html',
  styleUrls: ['./progress-bar-guidelines.component.scss'],
  standalone: true,
  imports: [PageLoadingIndicatorComponent],
})
export class ProgressBarGuidelinesComponent implements OnInit {
  isLoading: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}

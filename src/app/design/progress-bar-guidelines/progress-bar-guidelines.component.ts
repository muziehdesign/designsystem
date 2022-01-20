import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar-guidelines',
  templateUrl: './progress-bar-guidelines.component.html',
  styleUrls: ['./progress-bar-guidelines.component.scss']
})
export class ProgressBarGuidelinesComponent implements OnInit {
  isLoading: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}

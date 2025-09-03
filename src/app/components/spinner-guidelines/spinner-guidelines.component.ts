import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MzSpinner } from '@muziehdesign/components';

@Component({
    selector: 'app-spinner-guidelines',
    templateUrl: './spinner-guidelines.component.html',
    styleUrls: ['./spinner-guidelines.component.scss'],
    imports: [RouterModule, MzSpinner]
})
export class SpinnerGuidelinesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

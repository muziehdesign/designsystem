import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from 'muzieh-ngcomponents';

@Component({
  selector: 'app-spinner-guidelines',
  templateUrl: './spinner-guidelines.component.html',
  styleUrls: ['./spinner-guidelines.component.scss'],
  standalone: true,
  imports: [RouterModule, SpinnerComponent],
})
export class SpinnerGuidelinesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

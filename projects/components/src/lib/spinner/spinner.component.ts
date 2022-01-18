import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mz-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent  {

  @Input() size: 'medium' | 'large' = 'medium';
  constructor() { }

}

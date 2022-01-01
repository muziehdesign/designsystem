import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'kitchensink-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent  {

  @Input() size: 'medium' | 'large' = 'medium';
  @Input() type: 'primary' | 'secondary' | 'lone' = 'lone';
  constructor() { }

}

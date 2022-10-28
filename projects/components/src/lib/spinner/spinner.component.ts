import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mz-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class SpinnerComponent  {

  @Input() size: 'medium' | 'large' = 'medium';
  @Input() type: 'default' | 'inverse' = 'default'; // TODO: inverse will not exist one day
  constructor() { }

}

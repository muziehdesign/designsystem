import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  @Input() size: 'medium' | 'large' = 'medium';
  @Input() type: 'primary' | 'secondary' | 'lone' = 'lone';
  constructor() { }

  ngOnInit(): void {
  }

}

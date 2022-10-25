import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-temp-component',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      temp-component works!
    </p>
  `,
  styles: [
  ]
})
export class TempComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

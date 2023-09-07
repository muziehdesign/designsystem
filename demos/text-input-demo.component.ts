import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-input-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './text-input-demo.component.html',
  styleUrls: ['./text-input-demo.component.scss']
})
export class TextInputDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

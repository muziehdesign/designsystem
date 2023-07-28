import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class ColorComponent implements OnInit {

  colors: string[];
  constructor() { 
    this.colors = ['blue', 'gray', 'green', 'red', 'yellow'];
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  colors: string[];
  constructor() { 
    this.colors = ['blue', 'gray', 'green', 'red', 'yellow'];
  }

  ngOnInit(): void {
  }

}

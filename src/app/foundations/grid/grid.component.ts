import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class GridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

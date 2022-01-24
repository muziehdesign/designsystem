import { Component, OnInit } from '@angular/core';
import { PageEvent } from 'muzieh-ngcomponents';

@Component({
  selector: 'app-pagination-guidelines',
  templateUrl: './pagination-guidelines.component.html',
  styleUrls: ['./pagination-guidelines.component.scss']
})
export class PaginationGuidelinesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onPageChange(page: PageEvent) {

  }

}

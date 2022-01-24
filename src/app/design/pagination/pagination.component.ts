import { Component, OnInit } from '@angular/core';
import { PageEvent } from 'muzieh-ngcomponents';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onPageChange(page: PageEvent) {

  }

}

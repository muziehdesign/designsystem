import { Component, OnInit } from '@angular/core';
import { MzPagination, PageEvent } from '@muziehdesign/components';
import { PaginationExampleComponent } from './pagination-example';

@Component({
    selector: 'app-pagination-guidelines',
    templateUrl: './pagination-guidelines.component.html',
    styleUrls: ['./pagination-guidelines.component.scss'],
    imports: [MzPagination, PaginationExampleComponent]
})
export class PaginationGuidelinesComponent implements OnInit {

  smallPagination: PaginationModel = { page: 1, length: 40, pageSize: 50 };
  smallPagination2: PaginationModel = { page: 1, length: 100, pageSize: 20 };
  smallPagination3: PaginationModel = { page: 1, length: 140, pageSize: 20 };
  largeCollection: PaginationModel = { page: 1, length: 480, pageSize: 20 };
  constructor() { }

  ngOnInit(): void {
  }

  changePage(page: PageEvent, model: PaginationModel) {
    model.page = page.pageNumber;
    model.pageSize = page.pageSize;
  }

}

export interface PaginationModel {
  page: number;
  length: number;
  pageSize: number;
}
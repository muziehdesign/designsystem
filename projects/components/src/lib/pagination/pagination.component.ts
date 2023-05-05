import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Inject, Input, OnChanges, OnInit, Optional, Output, SimpleChanges } from '@angular/core';
import { PageEvent } from '../models/page-event';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { PaginationDefaultOptions } from './pagination-default-options';
import { PAGINATION_DEFAULT_OPTIONS } from './pagination-default-options.token';

@Component({
  selector: 'mz-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  imports: [CommonModule, SvgIconComponent],
  standalone: true,
})
export class PaginationComponent implements OnChanges {

  @Input() length: number = 0;
  @Input() page: number = 1;
  @Input() pageSize: number;
  @Input() pageSizeOptions: number[];
  @Output() public changePage = new EventEmitter<PageEvent>();
  pages: number[] = [];
  pageCount: number = 1;
  constructor(@Optional() @Inject(PAGINATION_DEFAULT_OPTIONS) paginationOptions: PaginationDefaultOptions) {
      this.pageSize = paginationOptions?.pageSize || 20;
      this.pageSizeOptions = paginationOptions?.pageSizeOptions || [20, 50, 100];

    this.updatePages(this.page, this.length, this.pageSize);
  }

  ngOnChanges(): void {
    this.updatePages(this.page, this.length, this.pageSize);
  }

  isEllipsis(v: number) {
    return v === -1;
  }

  changePageNumber(newValue: number) {
    if (newValue == this.page || newValue < 1 || newValue > this.pageCount) {
      return;
    }
    this.changePage.emit({ page: newValue, pageSize: this.pageSize } as PageEvent)
  }

  changePageSize(newValue: string) {
    if (Number(newValue) == this.pageSize) {
      return;
    }
    this.changePage.emit({ page: 1, pageSize: Number(newValue) } as PageEvent);
  }

  private updatePages(currentPage: number, lengthOfItems: number, currentPageSize: number) {
    const pageCount = Math.ceil(lengthOfItems / currentPageSize);
    this.pageCount = pageCount;
    let pageNumbers: number[] = [];
    const max = 7; // 3 items before and after current page

    if (pageCount <= max) {
      this.pages = [...Array(pageCount).keys()].map(i => i + 1);
      return;
    }

    let start = Math.max(1, currentPage - 3);
    let end = Math.min(pageCount, currentPage + 3);
    let range = end - start + 1;
    if (range < max) {
      end = Math.min(end + (max - range), pageCount);
    }
    range = end - start + 1;
    if (range < max) {
      start = Math.max(1, start - (max - range));
    }

    for (let x = start; x <= end; x++) {
      pageNumbers.push(x);
    }

    if (start != 1) {
      pageNumbers.splice(0, 2);
      pageNumbers.unshift(1, -1);
    }

    if (end != pageCount) {
      pageNumbers.splice(pageNumbers.length - 2);
      pageNumbers.push(-1, pageCount);
    }

    this.pages = pageNumbers;
  }
}

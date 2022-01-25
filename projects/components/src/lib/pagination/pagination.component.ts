import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '../models/page-event';

@Component({
  selector: 'mz-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() length: number = 0;
  @Input() page: number = 1;
  @Input() pageSize: number = 20;
  @Input() pageSizeOptions: number[] = [20, 50, 100];
  @Output() public changePage = new EventEmitter<PageEvent>();
  constructor() {

  }

  ngOnInit(): void { }

  changePageNumber(page: number) {
    this.changePage.emit({ page: page, pageSize: this.pageSize } as PageEvent)
  }

  changePageSize(newValue: string) {
    this.changePage.emit({ page: 1, pageSize: Number(newValue) } as PageEvent);
  }
}

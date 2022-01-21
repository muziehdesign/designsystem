import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PageEvent } from '../models/page-event';

@Component({
  selector: 'mz-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Output() public pageChange = new EventEmitter<PageEvent>();
  constructor() { }

  pageEvent: PageEvent = {
    page: 1,
    pageSize: 20
  }

  ngOnInit(): void {

  }

  onPageChange(page: number) {
    this.pageChange.emit( {page: page, pageSize: 20} as PageEvent)
  }
}

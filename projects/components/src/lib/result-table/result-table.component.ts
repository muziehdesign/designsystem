import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { ResultTableModel } from './table-result.model';

@Component({
  selector: 'mz-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css']
})
export class ResultTableComponent implements OnInit {

  @Input() public model!: ResultTableModel<any>;
  @Input() public headTemplate!: TemplateRef<any>;
  @Input() public bodyTemplate!: TemplateRef<any>;

  constructor() { }

  pageEvent: PageEvent = {
    page: 4,
    pageSize: 20
  }

  ngOnInit(): void {
  }


  getPageSymbol(current: number) {
    return ['A', 'B', 'C', 'D', 'E', 'F', 'G'][current - 1];
  }

  selectPage(page: string) {
    this.pageEvent.page = parseInt(page, 10) || 1;
  }

  formatInput(input: HTMLInputElement) {
    input.value = input.value.replace(FILTER_PAG_REGEX, '');
  }
}

export interface PageEvent {
  page: number;
  pageSize: number;
}

const FILTER_PAG_REGEX = /[^0-9]/g;

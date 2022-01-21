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

  pageLimit = 5;

  ngOnInit(): void {
  }


  selectPage(page: number) {
    console.log(page);
  }
}

export interface PageEvent {
  page: number;
  pageSize: number;
}

import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { PageEvent } from '../models/page-event';
import { ResultTableModel } from './table-result.model';

@Component({
  selector: 'mz-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.scss']
})
export class ResultTableComponent implements OnInit {

  @Input() public model!: ResultTableModel<any>;
  @Input() public headTemplate!: TemplateRef<any>;
  @Input() public bodyTemplate!: TemplateRef<any>;
  @Output() public pageChange = new EventEmitter<PageEvent>();
  constructor() { }

  ngOnInit(): void {

  }

  onPageChange(page: PageEvent) {
    this.pageChange.emit(page)
  }
}

import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { PageEvent } from '../models/page-event';
import { ResultTableModel } from './result-table.model';

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

  changePage(page: PageEvent, table: HTMLElement) {
    this.pageChange.emit(page);
    setTimeout(()=>{
      table.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  searchAgain() {
    this.pageChange.emit({page: this.model.page, pageSize: this.model.pageSize});
  }
}

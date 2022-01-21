import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
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

  constructor() { }

  ngOnInit(): void { }
}
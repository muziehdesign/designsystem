import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'mz-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css']
})
export class ResultTableComponent implements OnInit {

  @Input() public model!: ResultTableModel;
  @Input() public headTemplate!: TemplateRef<any>;
  @Input() public bodyTemplate!: TemplateRef<any>;
  @Input() public isLoading: boolean = false; 
  @Output() onChange = new EventEmitter<ResultTableChangeRequest>();
  constructor() { }

  ngOnInit(): void { }
}

export interface ResultTableModel {
  results: any;
  page?: number;
  pageSize?: number;
  totalResults?: number;
}

export interface ResultTableChangeRequest {
  page: number;
  pageSize: number;
}
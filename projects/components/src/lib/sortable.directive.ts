import { Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SortEvent } from './models/sort-event';

@Directive({
    selector: '[mzSortable]',
})
export class SortableDirective implements OnInit {
    @Input('mzSortable') mzSortable!: string;
    @Output() sort = new EventEmitter<SortEvent>();
    active = '';

    constructor() {}

    ngOnInit(): any {
      this.refresh();
    }

    refresh() {
      if(this.mzSortable) {
        this.active = this.mzSortable.includes('-') ? this.mzSortable.slice(1) : this.mzSortable;
      }
    }
}

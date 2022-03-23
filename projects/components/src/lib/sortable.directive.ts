import { ChangeDetectorRef, Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SortEvent } from './models/sort-event';

@Directive({
    selector: '[mzSortable]',
})
export class SortableDirective {
    @Input() set mzSortable(val: string) {
        this.setActiveValue();
        this.cd.markForCheck();
    }
    @Output() sort = new EventEmitter<SortEvent>();
    active = '';

    constructor(private cd: ChangeDetectorRef) {}

    setActiveValue() {
        console.log('refresh');
        if (this.mzSortable) {
            this.active = this.mzSortable.includes('-') ? this.mzSortable.slice(1) : this.mzSortable;
        }
    }
}

import { Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Directive({
    selector: '[mzSortable]',
})
export class SortableDirective implements OnInit {
    @Input('mzSortable') mzSortable!: string;
    @Output() sort = new EventEmitter<string>();
    sortKey = '';
    active = '';

    constructor() {}

    ngOnInit(): any {
        this.sortKey = this.mzSortable.includes('-') ? this.mzSortable.slice(1) : this.mzSortable;
        this.active = this.sortKey;
    }
}

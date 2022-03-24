import { Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SortEvent } from './models/sort-event';

@Directive({
    selector: '[mzSort]',
})
export class SortDirective implements OnInit {
    @Input('mzSort') mzSort!: string;
    @Output() sort = new EventEmitter<SortEvent>();
    active = '';

    constructor() {}

    ngOnInit(): any {
        this.active = this.mzSort.includes('-') ? this.mzSort.slice(1) : this.mzSort;
    }
}

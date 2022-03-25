import { Directive, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SortEvent } from './models/sort-event';

@Directive({
    selector: '[mzSort]',
})
export class SortDirective implements OnChanges {

    @Output() sort = new EventEmitter<SortEvent>();
    @Input('mzSort') set mzSort(value: string) {
        this._mzSort = value;
        this.setActiveHeaderSort();
    }

    mzSortOnChange$ = new BehaviorSubject<string>('');
    _mzSort!: string;
    active!: string;

    constructor() {}

    ngOnChanges(): any {
        this.mzSortOnChange$.next(this.active);
    }

    setActiveHeaderSort() {
        this.active = this._mzSort.includes('-') ? this._mzSort.slice(1) : this._mzSort;
    }
}

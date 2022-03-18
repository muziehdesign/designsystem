import { Directive, EventEmitter, HostListener, Input, OnInit, Optional, Output } from '@angular/core';
import { SortableDirective } from './sortable.directive';

@Directive({
    selector: '[mzSort]',
    host: {
      '[attr.aria-sort]': 'getAriaSortAttribute()',
    }
})
export class SortDirective implements OnInit {
    @Input() mzSort!: string;
    order = '';
    updatedSort = '';

    constructor(private sortable: SortableDirective) {}

    ngOnInit(): void {
        this.updatedSort = this.mzSort === this.sortable.sortKey ? this.sortable.mzSortable : this.mzSort;
        this.setOrder(this.updatedSort);
    }

    @HostListener('click', ['$event']) onClick($event: Event) {
        this.setOrder(this.updatedSort);
        this.updatedSort = this.order === 'desc' ? this.updatedSort.slice(1) : `-${this.updatedSort}`;

        this.sortable.active = this.mzSort;
        this.sortable.sort.emit(this.updatedSort);
    }

    isSorted() {
        this.setOrder(this.updatedSort);
        return this.mzSort === this.sortable.active;
    }

    getAriaSortAttribute() {
        if (!this.isSorted()) {
            return 'none';
        }
        return this.order === 'asc' ? 'ascending' : 'descending';
    }

    private setOrder(sort: string) {
        this.order = sort.includes('-') ? 'desc' : 'asc';
    }
}

import { Directive, Input, OnInit } from '@angular/core';
import { SortableDirective } from './sortable.directive';

@Directive({
    selector: '[mzSort]',
    host: {
        'role': 'button',
        '[attr.aria-sort]': 'getAriaSortAttribute()',
        '(click)': 'onClick()',
        '[class.sort-active]': 'isSorted()',
    },
})
export class SortDirective implements OnInit {
    @Input() mzSort!: string;
    order = '';
    updatedSort = '';

    constructor(private sortable: SortableDirective) {}

    ngOnInit(): void {
        this.updatedSort = this.mzSort === this.sortable.active ? this.sortable.mzSortable : this.mzSort;
        this.setOrder(this.updatedSort);
    }

    onClick($event: Event) {
        this.setOrder(this.updatedSort);
        this.updatedSort = this.order === 'desc' ? this.updatedSort.slice(1) : `-${this.updatedSort}`;

        this.sortable.active = this.mzSort;
        this.sortable.sort.emit({ sort: this.updatedSort });
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

import { Directive, Input, OnInit } from '@angular/core';
import { SortDirective } from './sort.directive';

@Directive({
    selector: '[mzSortKey]',
    host: {
        'role': 'button',
        '[attr.aria-sort]': 'getAriaSortAttribute()',
        '(click)': 'onClick()',
        '[class.sort-active]': 'isSorted()',
    },
})
export class SortKeyDirective implements OnInit {
    @Input() mzSortKey!: string;
    order = '';
    updatedSort = '';

    constructor(private sortable: SortDirective) {}

    ngOnInit(): void {
        this.updatedSort = this.mzSortKey === this.sortable.active ? this.sortable.mzSort : this.mzSortKey;
        this.setOrder(this.updatedSort);
    }

    onClick($event: Event) {
        this.setOrder(this.updatedSort);
        this.updatedSort = this.order === 'desc' ? this.updatedSort.slice(1) : `-${this.updatedSort}`;

        this.sortable.active = this.mzSortKey;
        this.sortable.sort.emit({ sort: this.updatedSort });
    }

    isSorted() {
        this.setOrder(this.updatedSort);
        return this.mzSortKey === this.sortable.active;
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

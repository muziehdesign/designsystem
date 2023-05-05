import { Directive, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';
import { SortDirective } from './sort.directive';

@Directive({
    selector: '[mzSortKey]',
    host: {
        'role': 'button',
        '[attr.aria-sort]': 'getAriaSortAttribute()',
        '(click)': 'onClick()',
    },
    standalone: true,
})
export class SortKeyDirective implements OnInit {
    @Input() mzSortKey!: string;
    order = 'asc';
    updatedSort = '';

    constructor(private sortable: SortDirective, private renderer: Renderer2, private hostElement: ElementRef) {}

    ngOnInit(): void {
        this.addSortClass();
        this.sortable.mzSortOnChange$.subscribe(() => {
            this.updatedSort = this.mzSortKey === this.sortable.active ? this.sortable._mzSort : this.mzSortKey;
            this.setOrder(this.updatedSort);

            if (this.isActive()) {
                this.addActiveClass();
            } else {
                this.removeActiveClass();
            }
        });
    }

    onClick($event: Event) {
        // remove active css classes
        this.removeActiveClass();

        // update current sort value (-order, order)
        this.updateSortKeyValue();

        // update parent directive active column and emit output
        this.updateActiveValue();

        // add arrow css clases
        this.addActiveClass();
    }

    getAriaSortAttribute() {
        if (!this.isActive()) {
            return 'none';
        }
        return this.order === 'asc' ? 'ascending' : 'descending';
    }

    private updateSortKeyValue() {
        if (this.isActive()) {
            this.updatedSort = this.order === 'desc' ? this.updatedSort.slice(1) : `-${this.updatedSort}`;
        } else {
            this.updatedSort = this.mzSortKey;
        }

        this.setOrder(this.updatedSort);
    }

    private updateActiveValue() {
        this.sortable.active = this.mzSortKey;
        this.sortable.sort.emit({ sort: this.updatedSort });
    }

    private addSortClass() {
        const spanElement = this.renderer.createElement('span');
        this.renderer.appendChild(this.hostElement.nativeElement, spanElement);
        this.renderer.addClass(this.hostElement.nativeElement, 'sort-trigger');
    }

    private addActiveClass() {
        this.renderer.addClass(this.hostElement.nativeElement, this.order === 'asc' ? 'sort-ascending' : 'sort-descending');
    }

    private removeActiveClass() {
        this.renderer.removeClass(this.hostElement.nativeElement, 'sort-ascending');
        this.renderer.removeClass(this.hostElement.nativeElement, 'sort-descending');
    }

    private isActive() {
        return this.mzSortKey === this.sortable.active;
    }

    private setOrder(sort: string) {
        this.order = sort.includes('-') ? 'desc' : 'asc';
    }
}

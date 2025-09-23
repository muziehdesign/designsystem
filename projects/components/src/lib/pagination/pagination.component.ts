import { Component, EventEmitter, Inject, Input, OnChanges, Optional, Output } from '@angular/core';
import { PageEvent } from '../models/page-event';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { MZ_PAGINATION_DEFAULT_OPTIONS, MzPaginationConfig } from './pagination-config';

@Component({
    selector: 'mz-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss'],
    imports: [SvgIconComponent],
})
export class MzPagination implements OnChanges {
    @Input({ required: true }) totalItems: number = 0;
    @Input({ required: true }) pageNumber: number = 1;
    @Input() scrollTo?: HTMLElement;
    @Input() pageSizeOptions: number[];
    @Input() pageSize: number;

    @Output() public changePage = new EventEmitter<PageEvent>();

    pages: number[] = [];
    pageCount: number = 1;
    protected options: MzPaginationConfig;

    constructor(@Optional() @Inject(MZ_PAGINATION_DEFAULT_OPTIONS) private paginationOptions: MzPaginationConfig) {
        this.options = paginationOptions || new MzPaginationConfig();
        this.pageSizeOptions = this.options.pageSizeOptions;
        this.pageSize = this.pageSizeOptions[0];
        this.updatePages(this.pageNumber, this.totalItems, this.pageSize);
    }

    ngOnChanges(): void {
        this.updatePages(this.pageNumber, this.totalItems, this.pageSize);
    }

    protected isEllipsis(v: number) {
        return v === -1;
    }

    changePageNumber(newValue: number) {
        if (newValue == this.pageNumber || newValue < 1 || newValue > this.pageCount) {
            return;
        }
        this.scrollTo?.scrollIntoView({ behavior: 'instant', block: 'start' });
        this.changePage.emit({ pageNumber: newValue, pageSize: this.pageSize } as PageEvent);
    }

    changePageSize(newValue: string) {
        if (Number(newValue) == this.pageSize) {
            return;
        }
        this.scrollTo?.scrollIntoView({ behavior: 'instant', block: 'start' });
        this.changePage.emit({ pageNumber: 1, pageSize: Number(newValue) } as PageEvent);
    }

    private updatePages(currentPage: number, lengthOfItems: number, currentPageSize: number) {
        const pageCount = Math.ceil(lengthOfItems / currentPageSize);
        this.pageCount = pageCount;
        let pageNumbers: number[] = [];
        const max = 7; // 3 items before and after current page

        if (pageCount <= max) {
            this.pages = [...Array(pageCount).keys()].map((i) => i + 1);
            return;
        }

        let start = Math.max(1, currentPage - 3);
        let end = Math.min(pageCount, currentPage + 3);
        let range = end - start + 1;
        if (range < max) {
            end = Math.min(end + (max - range), pageCount);
        }
        range = end - start + 1;
        if (range < max) {
            start = Math.max(1, start - (max - range));
        }

        for (let x = start; x <= end; x++) {
            pageNumbers.push(x);
        }

        if (start != 1) {
            pageNumbers.splice(0, 2);
            pageNumbers.unshift(1, -1);
        }

        if (end != pageCount) {
            pageNumbers.splice(pageNumbers.length - 2);
            pageNumbers.push(-1, pageCount);
        }

        this.pages = pageNumbers;
    }
}

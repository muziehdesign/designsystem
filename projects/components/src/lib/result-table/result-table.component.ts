import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { PageEvent } from '../models/page-event';
import { ResultTableOptions } from '../models/result-table-options';
import { PaginationComponent } from '../pagination/pagination.component';
import { SpinnerComponent } from '../spinner/spinner.component';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { ResultTableModel } from './result-table.model';

@Component({
    selector: 'mz-result-table',
    templateUrl: './result-table.component.html',
    styleUrls: ['./result-table.component.scss'],
    imports: [CommonModule, PaginationComponent, SpinnerComponent, SvgIconComponent],
    standalone: true,
})
export class ResultTableComponent implements AfterViewInit {

    @Input() public loading: boolean = false;
    @Input() public error?: Error;
    @Input() public model: ResultTableModel<any> | undefined | null;

    @ContentChild('headerTemplate') headerTemplate!: TemplateRef<any>;
    @ContentChild('bodyTemplate') bodyTemplate!: TemplateRef<any>;

    @Input() pageSizeOptions: number[] = [20, 50, 100];
    @Output() public pageChange = new EventEmitter<PageEvent>();

    @Input() public options: ResultTableOptions = { hidePagination: false, skipScrolling: false };

    constructor() {}

    ngAfterViewInit(): void {

    }

    changePage(page: PageEvent, table: HTMLElement) {
        this.pageChange.emit(page);
        if(!this.options.skipScrolling) {
            setTimeout(() => {
                table.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        }
    }

    searchAgain() {
        this.pageChange.emit({ pageNumber: this.model?.pageNumber || 1, pageSize: this.model?.pageSize || 20 }); // TODO
    }

    public get state(): 'loading' | 'failed' | 'succeeded' {
        if (this.loading) {
            return 'loading';
        }
        if (this.error) {
            return 'failed';
        }

        return 'succeeded';
    }

    public get isEmpty(): boolean {
        return !this.model || this.model.items.length === 0;
    }
}

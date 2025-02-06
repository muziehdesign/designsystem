import { Component, OnInit, Signal } from '@angular/core';
import { PageEvent } from '../../../../projects/components/src/lib/models/page-event';
import { ResultTableComponent, ResultTableModel, SortDirective } from 'muzieh-ngcomponents';
import { LoadingState } from '../../../../projects/components/src/lib/models/loading-state';
import { Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { SortEvent } from 'projects/components/src/lib/models/sort-event';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-result-table-guidelines',
    templateUrl: './result-table-guidelines.component.html',
    styleUrls: ['./result-table-guidelines.component.scss'],
    standalone: true,
    imports: [CommonModule, CurrencyPipe, DatePipe, FormsModule, ResultTableComponent, SortDirective],
})
export class ResultTableGuidelinesComponent {
    defaultModelTotal: number = 120;
    defaultModel: Signal<ResultTableModel<OrderDataModel> | undefined>;
    defaultLoadingState = { loading: false } as LoadingState;
    emptyModel$ = of({ items: [], totalItems: 10, pageNumber: 1, pageSize: 20 } as ResultTableModel<OrderDataModel>);
    errorLoadingState = { error: new Error(), loading: false } as LoadingState;
    error = new Error();
    loadingExampleState = { loading: true } as LoadingState;
    sortKey = 'orderNumber';
    pagination: PageEvent = { pageNumber: 1, pageSize: 20 };

    constructor() {
        this.defaultLoadingState.loading = true;
        this.defaultModel = toSignal(this.getPagedModel(this.pagination.pageNumber, this.pagination.pageSize, this.sortKey).pipe(
            tap(() => {
                this.defaultLoadingState.loading = false;
            })
        ));
    }

    onPageChange(pageEvent: PageEvent) {
        this.defaultLoadingState.loading = true;
        this.pagination = pageEvent;
    }

    getPagedModel(page: number, pageSize: number, sort: string): Observable<ResultTableModel<OrderDataModel>> {
        const orders = [
            { orderNumber: 10000001, customer: 'Usagi Tsukino', total: 50145.55, date: new Date(), country: 'USA', status: 'Fulfilled' },
            { orderNumber: 10000002, customer: 'Ami Mizuno', total: 968088.5, date: new Date(), country: 'USA', status: 'Fulfilled' },
            { orderNumber: 10000003, customer: 'Rei Hino', total: 120234.0, date: new Date(), country: 'USA', status: 'Fulfilled' },
            { orderNumber: 10000004, customer: 'Minako Aino', total: 7889.13, date: new Date(), country: 'USA', status: 'Fulfilled' },
            { orderNumber: 10000005, customer: 'Makoto Kino', total: 2833480.13, date: new Date(), country: 'USA', status: 'Fulfilled' },
        ];

        const results = Array.from(Array(pageSize).keys()).map((i) => {
            const order = orders[i % orders.length];
            return Object.assign({}, order, { orderNumber: order.orderNumber + i * page * 10 });
        });

        results.sort(this.compareValues(sort));

        return of(results).pipe(
            delay(1200),
            map((x) => {
                return <ResultTableModel<OrderDataModel>>{
                    items: x,
                    pageNumber: page,
                    pageSize: pageSize,
                    totalItems: this.defaultModelTotal,
                    sort: sort,
                };
            })
        );
    }

    onSort(sortEvent: SortEvent) {
        this.sortKey = sortEvent.sort;
        this.defaultLoadingState.loading = true;
    }

    // generic sorting function
    private compareValues(key: string) {
        const orderDesc = key.includes('-');
        key = key.includes('-') ? key.slice(1) : key;

        return function innerSort(a: any, b: any) {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                // property doesn't exist on either object
                return 0;
            }

            const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key];
            const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key];

            let comparison = 0;
            if (varA > varB) {
                comparison = 1;
            } else if (varA < varB) {
                comparison = -1;
            }
            return orderDesc ? comparison * -1 : comparison;
        };
    }
}

interface OrderDataModel {
    orderNumber: number;
    customer: string;
    total: number;
    date: Date;
    status: string;
    country: string;
}

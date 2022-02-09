import { Component, OnInit } from '@angular/core';
import { PageEvent } from 'dist/components/lib/models/page-event';
import { ResultTableModel } from 'muzieh-ngcomponents';
import { LoadingState } from 'dist/components/lib/models/loading-state';
import { Observable, of } from 'rxjs';
import { delay, finalize, map, tap } from 'rxjs/operators';

@Component({
    selector: 'app-result-table-guidelines',
    templateUrl: './result-table-guidelines.component.html',
    styleUrls: ['./result-table-guidelines.component.scss'],
})
export class ResultTableGuidelinesComponent {
    defaultModelTotal: number = 120;
    defaultModel$: Observable<ResultTableModel<OrderDataModel>>;
    defaultLoadingState = { loading: false } as LoadingState;
    emptyModel$ = of({ results: [], totalResults: 0, page: 1, pageSize: 20 } as ResultTableModel<OrderDataModel>);
    errorLoadingState = { error: new Error(), loading: false } as LoadingState;
    error = new Error();
    loadingExampleState = { loading: true } as LoadingState;

    constructor() {
        this.defaultLoadingState.loading = true;
        this.defaultModel$ = this.getPagedModel(1, 20).pipe(
            tap(() => {
                this.defaultLoadingState.loading = false;
            })
        );
    }

    changeDefaultModelTotal() {
        this.defaultLoadingState.loading = true;
        this.defaultModel$ = this.getPagedModel(1, 20).pipe(
            tap(() => {
                this.defaultLoadingState.loading = false;
            })
        );
    }

    onPageChange(pageEvent: PageEvent) {
        this.defaultLoadingState.loading = true;
        this.defaultModel$ = this.getPagedModel(pageEvent.page, pageEvent.pageSize).pipe(
            tap(() => {
                this.defaultLoadingState.loading = false;
            })
        );
    }

    getPagedModel(page: number, pageSize: number): Observable<ResultTableModel<OrderDataModel>> {
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

        return of(results).pipe(
            delay(1200),
            map((x) => {
                return <ResultTableModel<OrderDataModel>>{
                    results: x,
                    page: page,
                    pageSize: pageSize,
                    totalResults: this.defaultModelTotal,
                };
            })
        );
    }
}

interface OrderDataModel {
    orderNumber: number;
    customer: string;
    total: number;
    date: Date;
}

import { Component, OnInit } from '@angular/core';
import { PageEvent } from 'dist/components/lib/models/page-event';
import { ResultTableModel } from 'muzieh-ngcomponents';
import { LoadingState } from 'dist/components/lib/models/loading-state';
import { Observable, of } from 'rxjs';
import { delay, finalize, map } from 'rxjs/operators';

@Component({
    selector: 'app-result-table-guidelines',
    templateUrl: './result-table-guidelines.component.html',
    styleUrls: ['./result-table-guidelines.component.scss'],
})
export class ResultTableGuidelinesComponent  {
    defaultModelTotal: number = 120;
    defaultModel$: Observable<ResultTableModel<OrderDataModel>>;
    defaultLoadingState = { loading: false } as LoadingState;
    emptyModel$ = of({ results: [], totalResults: 0, page: 1, pageSize: 20 } as ResultTableModel<OrderDataModel>);
    errorLoadingState = { error: new Error(), loading: false } as LoadingState;

    constructor() {
        this.defaultLoadingState.loading = true;
        this.defaultModel$ = this.loadDefaultModel(1, 20);
    }

    changeDefaultModelTotal() {
        this.defaultLoadingState.loading = true;
        this.defaultModel$ = this.loadDefaultModel(1, 20);
    }

    onPageChange(pageEvent: PageEvent) {
        this.defaultLoadingState.loading = true;
        this.defaultModel$ = this.loadDefaultModel(pageEvent.page, pageEvent.pageSize);
    }

    loadDefaultModel(page: number, pageSize: number): Observable<ResultTableModel<OrderDataModel>> {
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
            map(
                (x) => {
                    return <ResultTableModel<OrderDataModel>>{
                        results: x,
                        page: page,
                        pageSize: pageSize,
                        totalResults: this.defaultModelTotal,
                    };
                },
                finalize(() => (this.defaultLoadingState.loading = false))
            )
        );
    }
}

interface OrderDataModel {
    orderNumber: number;
    customer: string;
    total: number;
    date: Date;
}

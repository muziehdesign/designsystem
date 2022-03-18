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
    emptyModel$ = of({ results: [], totalResults: 10, page: 1, pageSize: 20 } as ResultTableModel<OrderDataModel>);
    errorLoadingState = { error: new Error(), loading: false } as LoadingState;
    error = new Error();
    loadingExampleState = { loading: true } as LoadingState;
    sortKey = '-orderNumber';
    pagination: PageEvent = { page: 1, pageSize: 20 };

    constructor() {
        this.defaultLoadingState.loading = true;
        this.defaultModel$ = this.getPagedModel(this.pagination.page, this.pagination.pageSize, this.sortKey).pipe(
            tap(() => {
                this.defaultLoadingState.loading = false;
            })
        );
    }

    changeDefaultModelTotal() {
        this.defaultLoadingState.loading = true;
        this.defaultModel$ = this.getPagedModel(this.pagination.page, this.pagination.pageSize, this.sortKey).pipe(
            tap(() => {
                this.defaultLoadingState.loading = false;
            })
        );
    }

    onPageChange(pageEvent: PageEvent) {
        this.defaultLoadingState.loading = true;
        this.pagination = pageEvent;
        this.defaultModel$ = this.getPagedModel(this.pagination.page, this.pagination.pageSize, this.sortKey).pipe(
            tap(() => {
                this.defaultLoadingState.loading = false;
            })
        );
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
                    results: x,
                    page: page,
                    pageSize: pageSize,
                    totalResults: this.defaultModelTotal,
                    sort: sort,
                };
            })
        );
    }

    onSort(value: any) {
        console.log('component sort ' + value)
        this.sortKey = value;
        this.defaultLoadingState.loading = true;
        this.defaultModel$ = this.getPagedModel(this.pagination.page, this.pagination.pageSize, this.sortKey).pipe(
          tap(() => {
              this.defaultLoadingState.loading = false;
          })
      );
    }

    // generic sorting function
    private compareValues(key: string) {
        const orderDesc = key.includes('-');
        key = key.includes('-') ? key.slice(1) : key;

        return function innerSort(a: any, b: any) {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                // property doesn't exist on either object
                console.log('not found sort key')
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
}

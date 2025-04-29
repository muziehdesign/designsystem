import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { Component, Injector, Signal, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LoadingState, MuziehComponentsModule, ResultTableComponent, ResultTableModel, SortDirective } from 'muzieh-ngcomponents';
import { Observable, delay, map, of, tap } from 'rxjs';
import { NumberType, required, maxLength, StringType, DateType, NgFormModelState, NgFormModelStateFactory } from '@muziehdesign/forms';
import { FormsModule as MuziehFormsModule } from '@muziehdesign/forms';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
    selector: 'app-result-table-inline-editing',
    imports: [CommonModule, CurrencyPipe, DatePipe, FormsModule, ResultTableComponent, SortDirective, MuziehFormsModule, MuziehComponentsModule],
    templateUrl: './result-table-inline-editing.component.html',
    styleUrl: './result-table-inline-editing.component.scss'
})
export class ResultTableInlineEditingComponent {
    @ViewChild('editForm') editForm!: NgForm;
    defaultModelTotal: number = 10;
    defaultModel: Signal<ResultTableModel<OrderDataModel> | undefined>;
    model: OrderDataModel;
    modelState!: NgFormModelState<OrderDataModel>;
    defaultLoadingState = { loading: false } as LoadingState;
    editingRow: number | null = null;
    busy = false;

    constructor(private modelStateFactory: NgFormModelStateFactory, private injector: Injector) {
        this.model = new OrderDataModel();

        this.defaultLoadingState.loading = true;
        this.defaultModel = toSignal(this.getPagedModel().pipe(
            tap(() => {
                this.defaultLoadingState.loading = false;
            })
        ));
    }

    getPagedModel(): Observable<ResultTableModel<OrderDataModel>> {
        const orders = [
            { orderNumber: 10000001, customer: 'Usagi Tsukino', total: 50145.55, date: new Date(), country: 'USA', status: 'Fulfilled' },
            { orderNumber: 10000002, customer: 'Ami Mizuno', total: 968088.5, date: new Date(), country: 'USA', status: 'Fulfilled' },
            { orderNumber: 10000003, customer: 'Rei Hino', total: 120234.0, date: new Date(), country: 'USA', status: 'Fulfilled' },
            { orderNumber: 10000004, customer: 'Minako Aino', total: 7889.13, date: new Date(), country: 'USA', status: 'Fulfilled' },
            { orderNumber: 10000005, customer: 'Makoto Kino', total: 2833480.13, date: new Date(), country: 'USA', status: 'Fulfilled' },
            { orderNumber: 10000006, customer: 'Usagi Tsukino', total: 50145.55, date: new Date(), country: 'USA', status: 'Fulfilled' },
            { orderNumber: 10000007, customer: 'Ami Mizuno', total: 968088.5, date: new Date(), country: 'USA', status: 'Fulfilled' },
            { orderNumber: 10000008, customer: 'Rei Hino', total: 120234.0, date: new Date(), country: 'USA', status: 'Fulfilled' },
            { orderNumber: 10000009, customer: 'Minako Aino', total: 7889.13, date: new Date(), country: 'USA', status: 'Fulfilled' },
            { orderNumber: 10000010, customer: 'Makoto Kino', total: 2833480.13, date: new Date(), country: 'USA', status: 'Fulfilled' },
        ];

        return of(orders).pipe(
            delay(1200),
            map((x) => {
                return {
                    items: x,
                    pageNumber: 1,
                    pageSize: 10,
                    totalItems: this.defaultModelTotal,
                } satisfies ResultTableModel<OrderDataModel>
            })
        );
    }

    startEditing(order: any): void {
        if (this.editingRow == order.orderNumber) {
            return;
        }
        this.model.customer = order.customer;
        this.editingRow = order.orderNumber;
        this.modelState = this.modelStateFactory.create(this.editForm, this.model);
    }

    stopEditing(): void {
        this.editingRow = null;

        // call to api / fetch data
        this.defaultLoadingState.loading = true;
        this.defaultModel = toSignal(this.getPagedModel().pipe(
            tap(() => {
                this.defaultLoadingState.loading = false;
            })
        ), {injector: this.injector});
    }

    cancelEditing() {
        this.editingRow = null;
    }

    getIconKey(orderNumber: number): string {
        return this.editingRow === orderNumber ? 'check-circle' : 'pencil';
    }
}

export class OrderDataModel {
    @NumberType(required('Please enter orderNumber'), maxLength(9, 'Name cannot be more than 9 characters'))
    orderNumber?: number;
    @StringType(required('Please enter customer name'), maxLength(9, 'Name cannot be more than 9 characters'))
    customer?: string;
    @NumberType(required('Please enter total'), maxLength(9, 'Name cannot be more than 9 characters'))
    total?: number;
    @DateType(required('Please enter date'))
    date?: Date;

    status?: string;
    country?: string;
}

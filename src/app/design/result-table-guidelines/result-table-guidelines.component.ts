import { Component, OnInit } from '@angular/core';
import { ResultTableModel } from 'muzieh-ngcomponents';

@Component({
    selector: 'app-result-table-guidelines',
    templateUrl: './result-table-guidelines.component.html',
    styleUrls: ['./result-table-guidelines.component.scss'],
})
export class ResultTableGuidelinesComponent implements OnInit {
    defaultModel = new ResultTableModel<OrderDataModel>();
    loadingModel = new ResultTableModel<OrderDataModel>();
    emptyModel = new ResultTableModel<OrderDataModel>();
    errorModel = new ResultTableModel<OrderDataModel>();
    constructor() {
        this.defaultModel.setAsSucceeded([
            {orderNumber: 1000, customer: 'Usagi Tsukino', total: 45.55, date: new Date()},
            {orderNumber: 1001, customer: 'Ami Mizuno', total: 96.50, date: new Date()},
            {orderNumber: 1002, customer: 'Rei Hino', total: 120.00, date: new Date()},
            {orderNumber: 1003, customer: 'Minako Aino', total: 78.13, date: new Date()},
        ]);
        this.loadingModel.setAsLoading();
        this.emptyModel.setAsSucceeded([]);
        this.errorModel.setAsFailed(new Error());
    }

    ngOnInit(): void {}
}

interface OrderDataModel {
    orderNumber: number;
    customer: string;
    total: number;
    date: Date;
}
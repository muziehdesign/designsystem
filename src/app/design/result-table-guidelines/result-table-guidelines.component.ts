import { Component, OnInit } from '@angular/core';
import { PageEvent } from 'dist/components/lib/models/page-event';
import { ResultTableModel } from 'muzieh-ngcomponents';

@Component({
    selector: 'app-result-table-guidelines',
    templateUrl: './result-table-guidelines.component.html',
    styleUrls: ['./result-table-guidelines.component.scss'],
})
export class ResultTableGuidelinesComponent implements OnInit {
    pageEvent: PageEvent = {
      page: 1,
      pageSize: 20
    }
    defaultModel = new ResultTableModel<OrderDataModel>();
    loadingModel = new ResultTableModel<OrderDataModel>();
    emptyModel = new ResultTableModel<OrderDataModel>();
    errorModel = new ResultTableModel<OrderDataModel>();
    constructor() {
        this.defaultModel.setAsSucceeded(PAGINATION_EXAMPLE);
        this.loadingModel.setAsLoading();
        this.emptyModel.setAsSucceeded([]);
        this.errorModel.setAsFailed(new Error());
    }
    ngOnInit(): void {}

    onPageChange(page: PageEvent) {
      this.pageEvent = page;
      console.log(page);
    }
}

interface OrderDataModel {
    orderNumber: number;
    customer: string;
    total: number;
    date: Date;
}

// 100 items
const PAGINATION_EXAMPLE = [
  {orderNumber: Math.random(), customer: 'Usagi Tsukino', total: 45.55, date: new Date()},
  {orderNumber: Math.random(), customer: 'Ami Mizuno', total: 96.50, date: new Date()},
  {orderNumber: Math.random(), customer: 'Rei Hino', total: 120.00, date: new Date()},
  {orderNumber: Math.random(), customer: 'Minako Aino', total: 78.13, date: new Date()},
  {orderNumber: Math.random(), customer: 'Rei Aino', total: 28.13, date: new Date()},
  {orderNumber: Math.random(), customer: 'Usagi Tsukino', total: 45.55, date: new Date()},
  {orderNumber: Math.random(), customer: 'Ami Mizuno', total: 96.50, date: new Date()},
  {orderNumber: Math.random(), customer: 'Rei Hino', total: 120.00, date: new Date()},
  {orderNumber: Math.random(), customer: 'Minako Aino', total: 78.13, date: new Date()},
  {orderNumber: Math.random(), customer: 'Rei Aino', total: 28.13, date: new Date()},
  {orderNumber: Math.random(), customer: 'Usagi Tsukino', total: 45.55, date: new Date()},
  {orderNumber: Math.random(), customer: 'Ami Mizuno', total: 96.50, date: new Date()},
  {orderNumber: Math.random(), customer: 'Rei Hino', total: 120.00, date: new Date()},
  {orderNumber: Math.random(), customer: 'Minako Aino', total: 78.13, date: new Date()},
  {orderNumber: Math.random(), customer: 'Rei Aino', total: 28.13, date: new Date()},
  {orderNumber: Math.random(), customer: 'Usagi Tsukino', total: 45.55, date: new Date()},
  {orderNumber: Math.random(), customer: 'Ami Mizuno', total: 96.50, date: new Date()},
  {orderNumber: Math.random(), customer: 'Rei Hino', total: 120.00, date: new Date()},
  {orderNumber: Math.random(), customer: 'Minako Aino', total: 78.13, date: new Date()},
  {orderNumber: Math.random(), customer: 'Rei Aino', total: 28.13, date: new Date()},
  {orderNumber: Math.random(), customer: 'Usagi Tsukino', total: 45.55, date: new Date()},
  {orderNumber: Math.random(), customer: 'Ami Mizuno', total: 96.50, date: new Date()},
  {orderNumber: Math.random(), customer: 'Rei Hino', total: 120.00, date: new Date()},
  {orderNumber: Math.random(), customer: 'Minako Aino', total: 78.13, date: new Date()},
  {orderNumber: Math.random(), customer: 'Rei Aino', total: 28.13, date: new Date()},
  {orderNumber: Math.random(), customer: 'Usagi Tsukino', total: 45.55, date: new Date()},
  {orderNumber: Math.random(), customer: 'Ami Mizuno', total: 96.50, date: new Date()},
  {orderNumber: Math.random(), customer: 'Rei Hino', total: 120.00, date: new Date()},
  {orderNumber: Math.random(), customer: 'Minako Aino', total: 78.13, date: new Date()},
  {orderNumber: Math.random(), customer: 'Rei Aino', total: 28.13, date: new Date()},
  {orderNumber: Math.random(), customer: 'Usagi Tsukino', total: 45.55, date: new Date()},
  {orderNumber: Math.random(), customer: 'Ami Mizuno', total: 96.50, date: new Date()},
  {orderNumber: Math.random(), customer: 'Rei Hino', total: 120.00, date: new Date()},
  {orderNumber: Math.random(), customer: 'Minako Aino', total: 78.13, date: new Date()},
  {orderNumber: Math.random(), customer: 'Rei Aino', total: 28.13, date: new Date()},
  {orderNumber: Math.random(), customer: 'Usagi Tsukino', total: 45.55, date: new Date()},
  {orderNumber: Math.random(), customer: 'Ami Mizuno', total: 96.50, date: new Date()},
  {orderNumber: Math.random(), customer: 'Rei Hino', total: 120.00, date: new Date()},
  {orderNumber: Math.random(), customer: 'Minako Aino', total: 78.13, date: new Date()},
  {orderNumber: Math.random(), customer: 'Rei Aino', total: 28.13, date: new Date()},
  {orderNumber: Math.random(), customer: 'Usagi Tsukino', total: 45.55, date: new Date()},
  {orderNumber: Math.random(), customer: 'Ami Mizuno', total: 96.50, date: new Date()},
  {orderNumber: Math.random(), customer: 'Rei Hino', total: 120.00, date: new Date()},
  {orderNumber: Math.random(), customer: 'Minako Aino', total: 78.13, date: new Date()},
  {orderNumber: Math.random(), customer: 'Rei Aino', total: 28.13, date: new Date()},
  {orderNumber: Math.random(), customer: 'Usagi Tsukino', total: 45.55, date: new Date()},
  {orderNumber: Math.random(), customer: 'Ami Mizuno', total: 96.50, date: new Date()},
  {orderNumber: Math.random(), customer: 'Rei Hino', total: 120.00, date: new Date()},
  {orderNumber: Math.random(), customer: 'Minako Aino', total: 78.13, date: new Date()},
  {orderNumber: Math.random(), customer: 'Rei Aino', total: 28.13, date: new Date()},
  {orderNumber: Math.random(), customer: 'Usagi Tsukino', total: 45.55, date: new Date()},
  {orderNumber: Math.random(), customer: 'Ami Mizuno', total: 96.50, date: new Date()},
  {orderNumber: Math.random(), customer: 'Rei Hino', total: 120.00, date: new Date()},
  {orderNumber: Math.random(), customer: 'Minako Aino', total: 78.13, date: new Date()},
  {orderNumber: Math.random(), customer: 'Rei Aino', total: 28.13, date: new Date()},
  {orderNumber: Math.random(), customer: 'Usagi Tsukino', total: 45.55, date: new Date()},
  {orderNumber: Math.random(), customer: 'Ami Mizuno', total: 96.50, date: new Date()},
  {orderNumber: Math.random(), customer: 'Rei Hino', total: 120.00, date: new Date()},
  {orderNumber: Math.random(), customer: 'Minako Aino', total: 78.13, date: new Date()},
  {orderNumber: Math.random(), customer: 'Rei Aino', total: 28.13, date: new Date()},
  {orderNumber: Math.random(), customer: 'Usagi Tsukino', total: 45.55, date: new Date()},
  {orderNumber: Math.random(), customer: 'Ami Mizuno', total: 96.50, date: new Date()},
  {orderNumber: Math.random(), customer: 'Rei Hino', total: 120.00, date: new Date()},
  {orderNumber: Math.random(), customer: 'Minako Aino', total: 78.13, date: new Date()},
  {orderNumber: Math.random(), customer: 'Rei Aino', total: 28.13, date: new Date()},
  {orderNumber: Math.random(), customer: 'Usagi Tsukino', total: 45.55, date: new Date()},
  {orderNumber: Math.random(), customer: 'Ami Mizuno', total: 96.50, date: new Date()},
  {orderNumber: Math.random(), customer: 'Rei Hino', total: 120.00, date: new Date()},
  {orderNumber: Math.random(), customer: 'Minako Aino', total: 78.13, date: new Date()},
  {orderNumber: Math.random(), customer: 'Rei Aino', total: 28.13, date: new Date()},
  {orderNumber: Math.random(), customer: 'Usagi Tsukino', total: 45.55, date: new Date()},
  {orderNumber: Math.random(), customer: 'Ami Mizuno', total: 96.50, date: new Date()},
  {orderNumber: Math.random(), customer: 'Rei Hino', total: 120.00, date: new Date()},
  {orderNumber: Math.random(), customer: 'Minako Aino', total: 78.13, date: new Date()},
  {orderNumber: Math.random(), customer: 'Rei Aino', total: 28.13, date: new Date()},
  {orderNumber: Math.random(), customer: 'Usagi Tsukino', total: 45.55, date: new Date()},
  {orderNumber: Math.random(), customer: 'Ami Mizuno', total: 96.50, date: new Date()},
  {orderNumber: Math.random(), customer: 'Rei Hino', total: 120.00, date: new Date()},
  {orderNumber: Math.random(), customer: 'Minako Aino', total: 78.13, date: new Date()},
  {orderNumber: Math.random(), customer: 'Rei Aino', total: 28.13, date: new Date()},
  {orderNumber: Math.random(), customer: 'Usagi Tsukino', total: 45.55, date: new Date()},
  {orderNumber: Math.random(), customer: 'Ami Mizuno', total: 96.50, date: new Date()},
  {orderNumber: Math.random(), customer: 'Rei Hino', total: 120.00, date: new Date()},
  {orderNumber: Math.random(), customer: 'Minako Aino', total: 78.13, date: new Date()},
  {orderNumber: Math.random(), customer: 'Rei Aino', total: 28.13, date: new Date()},
  {orderNumber: Math.random(), customer: 'Usagi Tsukino', total: 45.55, date: new Date()},
  {orderNumber: Math.random(), customer: 'Ami Mizuno', total: 96.50, date: new Date()},
  {orderNumber: Math.random(), customer: 'Rei Hino', total: 120.00, date: new Date()},
  {orderNumber: Math.random(), customer: 'Minako Aino', total: 78.13, date: new Date()},
  {orderNumber: Math.random(), customer: 'Rei Aino', total: 28.13, date: new Date()},
  {orderNumber: Math.random(), customer: 'Usagi Tsukino', total: 45.55, date: new Date()},
  {orderNumber: Math.random(), customer: 'Ami Mizuno', total: 96.50, date: new Date()},
  {orderNumber: Math.random(), customer: 'Rei Hino', total: 120.00, date: new Date()},
  {orderNumber: Math.random(), customer: 'Minako Aino', total: 78.13, date: new Date()},
  {orderNumber: Math.random(), customer: 'Rei Aino', total: 28.13, date: new Date()},
  {orderNumber: Math.random(), customer: 'Usagi Tsukino', total: 45.55, date: new Date()},
  {orderNumber: Math.random(), customer: 'Ami Mizuno', total: 96.50, date: new Date()},
  {orderNumber: Math.random(), customer: 'Rei Hino', total: 120.00, date: new Date()},
  {orderNumber: Math.random(), customer: 'Minako Aino', total: 78.13, date: new Date()},
  {orderNumber: Math.random(), customer: 'Rei Aino', total: 28.13, date: new Date()},
]

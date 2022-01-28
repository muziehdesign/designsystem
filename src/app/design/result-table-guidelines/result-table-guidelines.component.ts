import { Component, OnInit } from '@angular/core';
import { PageEvent } from 'dist/components/lib/models/page-event';
import { ResultTableModel } from 'muzieh-ngcomponents';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-result-table-guidelines',
  templateUrl: './result-table-guidelines.component.html',
  styleUrls: ['./result-table-guidelines.component.scss'],
})
export class ResultTableGuidelinesComponent implements OnInit {
  defaultModelTotal: number = 120;
  defaultModel = new ResultTableModel<OrderDataModel>();
  loadingModel = new ResultTableModel<OrderDataModel>();
  emptyModel = new ResultTableModel<OrderDataModel>();
  errorModel = new ResultTableModel<OrderDataModel>();
  constructor() {
    this.defaultModel.setAsSucceeded(this.getOrderListData(1, 10), this.defaultModelTotal, 1, 20);
    this.loadingModel.setAsSucceeded(this.getOrderListData(1, 10), this.defaultModelTotal, 1, 20);
    this.loadingModel.setAsLoading();
    this.emptyModel.setAsSucceeded([]);
    this.errorModel.setAsFailed(new Error());
  }
  ngOnInit(): void { }

  changeDefaultModelTotal() {
    const orders = this.getOrderListData(1, Math.min(this.defaultModelTotal, this.defaultModel.pageSize));
    this.defaultModel.setAsSucceeded(orders, this.defaultModelTotal, 1, this.defaultModel.pageSize);
  }

  onPageChange(pageEvent: PageEvent) {
    this.defaultModel.setAsLoading();
    of(this.getOrderListData(pageEvent.page, pageEvent.pageSize)).pipe(delay(1200)).subscribe(x => this.defaultModel.setAsSucceeded(x, this.defaultModelTotal, pageEvent.page, pageEvent.pageSize));
  }

  getOrderListData(page: number, pageSize: number) {
    const orders = [
      { orderNumber: 10000001, customer: 'Usagi Tsukino', total: 50145.55, date: new Date(), country: 'USA', status: 'Fulfilled' },
      { orderNumber: 10000002, customer: 'Ami Mizuno', total: 968088.50, date: new Date(), country: 'USA', status: 'Fulfilled' },
      { orderNumber: 10000003, customer: 'Rei Hino', total: 120234.00, date: new Date(), country: 'USA', status: 'Fulfilled' },
      { orderNumber: 10000004, customer: 'Minako Aino', total: 7889.13, date: new Date(), country: 'USA', status: 'Fulfilled' },
      { orderNumber: 10000005, customer: 'Makoto Kino', total: 2833480.13, date: new Date(), country: 'USA', status: 'Fulfilled' },
    ]

    const results = Array.from(Array(pageSize).keys()).map(i => {
      const order = orders[i % orders.length];
      return Object.assign({}, order, { orderNumber: order.orderNumber + i * page * 10 })
    });

    return results;
  }
}

interface OrderDataModel {
  orderNumber: number;
  customer: string;
  total: number;
  date: Date;
}

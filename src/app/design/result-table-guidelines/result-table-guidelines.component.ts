import { Component, OnInit } from '@angular/core';
import { PageEvent } from 'dist/components/lib/models/page-event';
import { ResultTableModel } from 'muzieh-ngcomponents';
import { LoadingState } from 'dist/components/lib/models/loading-state';
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
  loadingState = { loading: true } as LoadingState;
  loadingStateLoadingModel = { loading: true } as LoadingState;

  constructor() {

    this.setData(this.getOrderListData(1, 10), this.defaultModelTotal, 1, 20)
    this.loadingModel = {...this.defaultModel};
    this.loadingState.loading = false;
    this.errorModel.state = 'failed';
  }
  ngOnInit(): void { }

  changeDefaultModelTotal() {
    this.loadingState.loading = true;
    const orders = this.getOrderListData(1, Math.min(this.defaultModelTotal, this.defaultModel.pageSize));
    this.setData(orders, this.defaultModelTotal, 1, this.defaultModel.pageSize);
  }

  onPageChange(pageEvent: PageEvent) {
    this.loadingState.loading = true;
    of(this.getOrderListData(pageEvent.page, pageEvent.pageSize)).pipe(delay(1200)).subscribe(x => this.setData(x, this.defaultModelTotal, pageEvent.page, pageEvent.pageSize));
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

  private setData(data: OrderDataModel[], total?: number, page: number = 1, pageSize?: number) {
    this.defaultModel.state = 'succeeded';
    this.defaultModel.results = data
    this.defaultModel.page = page;
    this.defaultModel.pageSize = pageSize ?? 0;
    this.defaultModel.total = total ?? 0;
    this.loadingState.loading = false;
  }
}

interface OrderDataModel {
  orderNumber: number;
  customer: string;
  total: number;
  date: Date;
}

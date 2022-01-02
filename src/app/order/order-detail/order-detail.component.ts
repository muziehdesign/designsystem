import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OrderModel, OrderStatus } from '../models';
import { OrderService } from '../order.service';

@Component({
    selector: 'app-order-detail',
    templateUrl: './order-detail.component.html',
    styleUrls: ['./order-detail.component.scss'],
})
export class OrderDetailComponent implements OnInit {
    order$: Observable<OrderModel>;
    order: OrderModel;
    translatedStatus: 'new' | 'inProgress' | 'completed';
    constructor(private activatedRoute: ActivatedRoute, private serivce: OrderService) {
        this.order$ = activatedRoute.data.pipe(map((data) => data['order']));
        this.order = activatedRoute.snapshot.data['order'];
        if (this.order.status == OrderStatus.canceled || this.order.status == OrderStatus.delivered) {
            this.translatedStatus = 'completed';
        } else if (this.order.status == OrderStatus.created) {
            this.translatedStatus = 'new';
        } else {
            this.translatedStatus = 'inProgress';
        }
    }

    ngOnInit(): void {}
}

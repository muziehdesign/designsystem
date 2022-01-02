import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { OrderClient } from '../api/order.client';
import { OrderModel } from './models';

@Injectable()
export class OrderService {
    constructor(private client: OrderClient) {}

    getOrder(orderId: number): Observable<OrderModel> {
        return this.client.getOrder2(orderId).pipe(map((response) => response as OrderModel), catchError(error=>{
            console.log('caught service layer error');
            console.log(error);
            throw(error);
        }));
    }
}

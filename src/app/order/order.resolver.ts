import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { OrderModel } from './models';
import { OrderService } from './order.service';

@Injectable()
export class OrderResolver implements Resolve<OrderModel> {
  constructor(private serivce: OrderService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<OrderModel> {
    return this.serivce.getOrder(route.params['orderId'] as number);
  }
}

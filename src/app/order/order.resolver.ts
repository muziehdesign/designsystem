import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { OrderModel } from './models';
import { OrderService } from './order.service';

@Injectable()
export class OrderResolver  {
  constructor(private serivce: OrderService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<OrderModel> {
    return this.serivce.getOrder(route.params['orderId'] as number);
  }
}

import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ApiConfig, API_CONFIG } from './api-config';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class OrderClient {
    constructor(@Inject(API_CONFIG) private config: ApiConfig, private http: HttpClient) {}

    getOrder(orderId: number): Observable<HttpResponse<OrderResponse>> {
        return this.http.get<OrderResponse>(`${this.config.orderApi.url}/api/v1/orders/${orderId}`, { observe: 'response' });
    }

    getOrder2(orderId: number): Observable<OrderResponse> {
      return this.http.get<OrderResponse>(`${this.config.orderApi.url}/api/v1/orders/${orderId}`);
  }
}

export interface OrderResponse {
    orderId: number;
    orderNumber: number;
    orderTotal: number;
    status: string;
    submissionDate: Date;
    customer: CustomerResponse;
}

export interface CustomerResponse {
    userId: number;
    firstName: string;
    lastName: string;
}

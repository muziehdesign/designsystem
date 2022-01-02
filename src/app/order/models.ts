export interface OrderModel {
    orderId: number;
    orderNumber: number;
    orderTotal: number;
    submissionDate: Date;
    customer: CustomerModel;
    status: OrderStatus;
}

export interface CustomerModel {
    userId: number;
    firstName: string;
    lastName: string;
}

export enum OrderStatus {
    created = 'created',
    confirmed = 'confirmed',
    partiallyShipped = 'partiallyShipped',
    shipped = 'shipped',
    delivered = 'delivered',
    canceled = 'canceled'
}
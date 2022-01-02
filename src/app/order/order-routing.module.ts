import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderResolver } from './order.resolver';

const routes: Routes = [
  {path: 'orders/:orderId', component: OrderDetailComponent, resolve: { order: OrderResolver} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }

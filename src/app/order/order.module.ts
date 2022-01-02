import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderService } from './order.service';
import { OrderResolver } from './order.resolver';
import { ApiModule } from '../api/api.module';
import { API_CONFIG } from '../api/api-config';
import { APP_CONFIG } from 'src/app-config';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { EnumDisplayPipe } from 'kitchensink/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [OrderDetailComponent],
    imports: [CommonModule, OrderRoutingModule, ApiModule, NgbDropdownModule, SharedModule],
    providers: [OrderService, OrderResolver, { provide: API_CONFIG, useExisting: APP_CONFIG }],
})
export class OrderModule {}

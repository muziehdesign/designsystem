import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplesRoutingModule } from './examples-routing.module';
import { ResourceDetailComponent } from './resource-detail/resource-detail.component';
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { ExamplesComponent } from './examples.component';

@NgModule({
  declarations: [ResourceDetailComponent, ExamplesComponent],
  imports: [
    CommonModule,
    ExamplesRoutingModule,
    NgbNavModule,
    NgbDropdownModule,
    SharedModule
  ]
})
export class ExamplesModule { }

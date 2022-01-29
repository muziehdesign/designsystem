import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamplesRoutingModule } from './examples-routing.module';
import { ResourceDetailComponent } from './resource-detail/resource-detail.component';
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';
import { ExamplesComponent } from './examples.component';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ResourceDetailComponent, ExamplesComponent, ResourceListComponent],
  imports: [
    CommonModule,
    ExamplesRoutingModule,
    NgbNavModule,
    NgbDropdownModule,
    FormsModule,
    SharedModule
  ]
})
export class ExamplesModule { }

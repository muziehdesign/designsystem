import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplesRoutingModule } from './examples-routing.module';
import { ResourceDetailComponent } from './resource-detail/resource-detail.component';
import { SharedModule } from '../shared/shared.module';
import { ExamplesComponent } from './examples.component';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { FormsModule } from '@angular/forms';
import { MuziehComponentsModule } from 'muzieh-ngcomponents';
import { NgbDropdownModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [ResourceDetailComponent, ExamplesComponent, ResourceListComponent],
  imports: [
    CommonModule,
    ExamplesRoutingModule,
    NgbDropdownModule,
    FormsModule,
    SharedModule,
    MuziehComponentsModule,
    NgbNavModule,
  ]
})
export class ExamplesModule { }

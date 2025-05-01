import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplesRoutingModule } from './examples-routing.module';
import { ResourceDetailComponent } from './resource-detail/resource-detail.component';
import { SharedModule } from '../shared/shared.module';
import { ExamplesComponent } from './examples.component';
import { ResourceListComponent } from './resource-list/resource-list.component';
import { FormsModule } from '@angular/forms';
import { ButtonDirective, MuziehComponentsModule, SvgIconComponent } from 'muzieh-ngcomponents';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
@NgModule({
  declarations: [ResourceDetailComponent, ExamplesComponent, ResourceListComponent],
  imports: [
    CommonModule,
    ExamplesRoutingModule,
    NgbNavModule,
    FormsModule,
    SharedModule,
    MuziehComponentsModule,
    
    CdkMenuTrigger, CdkMenu, CdkMenuItem, ButtonDirective, SvgIconComponent
  ]
})
export class ExamplesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignRoutingModule } from './design-routing.module';
import { FormControlsComponent } from './form-controls/form-controls.component';


@NgModule({
  declarations: [
    FormControlsComponent
  ],
  imports: [
    CommonModule,
    DesignRoutingModule
  ]
})
export class DesignModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeGuidelinesRoutingModule } from './code-guidelines-routing.module';
import { CodeGuidelinesComponent } from './code-guidelines.component';


@NgModule({
  declarations: [
    CodeGuidelinesComponent
  ],
  imports: [
    CommonModule,
    CodeGuidelinesRoutingModule
  ]
})
export class CodeGuidelinesModule { }

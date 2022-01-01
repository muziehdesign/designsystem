import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { CommonComponent } from './common.component';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    CommonComponent,
    SpinnerComponent
  ],
  imports: [
    AngularCommonModule
  ],
  exports: [
    CommonComponent,
    SpinnerComponent
  ]
})
export class CommonModule { }

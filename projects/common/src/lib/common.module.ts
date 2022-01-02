import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { CommonComponent } from './common.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { EnumDisplayPipe } from './enum-display.pipe';



@NgModule({
  declarations: [
    CommonComponent,
    SpinnerComponent,
    EnumDisplayPipe
  ],
  imports: [
    AngularCommonModule
  ],
  exports: [
    CommonComponent,
    SpinnerComponent,
    EnumDisplayPipe
  ]
})
export class CommonModule { }

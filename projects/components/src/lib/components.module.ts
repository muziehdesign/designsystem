import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpinnerComponent } from './spinner/spinner.component';
import { EnumDisplayPipe } from './enum-display/enum-display.pipe';

@NgModule({
  declarations: [
    SpinnerComponent,
    EnumDisplayPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SpinnerComponent,
    EnumDisplayPipe
  ]
})
export class MuziehComponentsModule { }

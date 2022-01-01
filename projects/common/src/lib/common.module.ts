import { NgModule } from '@angular/core';
import { CommonComponent } from './common.component';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [
    CommonComponent,
    SpinnerComponent
  ],
  imports: [
  ],
  exports: [
    CommonComponent
  ]
})
export class CommonModule { }

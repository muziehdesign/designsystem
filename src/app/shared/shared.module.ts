import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { PageProgressBarComponent } from './page-progress-bar/page-progress-bar.component';
import { PageLoadingIndicatorComponent } from './page-loading-indicator/page-loading-indicator.component';

@NgModule({
  declarations: [
    SpinnerComponent,
    PageProgressBarComponent,
    PageLoadingIndicatorComponent
  ],
  exports: [
    SpinnerComponent,
    PageProgressBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

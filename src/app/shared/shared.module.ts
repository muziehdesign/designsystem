import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { PageProgressBarComponent } from './page-progress-bar/page-progress-bar.component';
import { PageLoadingIndicatorComponent } from './page-loading-indicator/page-loading-indicator.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { CodeExampleComponent } from '../design/code-example/code-example.component';

@NgModule({
  declarations: [
    SpinnerComponent,
    PageProgressBarComponent,
    PageLoadingIndicatorComponent,
    SvgIconComponent
  ],
  exports: [
    SpinnerComponent,
    PageProgressBarComponent,
    SvgIconComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

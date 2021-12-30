import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { PageProgressBarComponent } from './page-progress-bar/page-progress-bar.component';
import { PageLoadingIndicatorComponent } from './page-loading-indicator/page-loading-indicator.component';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { CodeExampleComponent } from './code-example/code-example.component';

@NgModule({
  declarations: [
    SpinnerComponent,
    PageProgressBarComponent,
    PageLoadingIndicatorComponent,
    SvgIconComponent,
    CodeExampleComponent
  ],
  exports: [
    SpinnerComponent,
    PageProgressBarComponent,
    SvgIconComponent,
    CodeExampleComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

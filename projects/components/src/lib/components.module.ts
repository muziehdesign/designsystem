import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpinnerComponent } from './spinner/spinner.component';
import { EnumDisplayPipe } from './enum-display/enum-display.pipe';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { ResultTableComponent } from './result-table/result-table.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { PageLoadingIndicatorComponent } from './page-loading-indicator/page-loading-indicator.component';
import { TimeValueAccessorDirective } from './time-value-accessor.directive';
import { TimeValueValidatorDirective } from './time-value-validator.directive';

@NgModule({
  declarations: [
    SvgIconComponent,
    SpinnerComponent,
    EnumDisplayPipe,
    ResultTableComponent,
    PaginatorComponent,
    PageLoadingIndicatorComponent,
    TimeValueAccessorDirective,
    TimeValueValidatorDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EnumDisplayPipe,
    SpinnerComponent,
    SvgIconComponent,
    ResultTableComponent,
    PageLoadingIndicatorComponent,
    TimeValueAccessorDirective,
    TimeValueValidatorDirective
  ]
})
export class MuziehComponentsModule { }

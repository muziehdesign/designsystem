import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpinnerComponent } from './spinner/spinner.component';
import { EnumDisplayPipe } from './enum-display/enum-display.pipe';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { ResultTableComponent } from './result-table/result-table.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PageLoadingIndicatorComponent } from './page-loading-indicator/page-loading-indicator.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TimeValueValidatorDirective } from './time-value-validator.directive';
import { PageHeaderComponent } from './page-header/page-header.component';
import { TimeValueAccessorDirective } from './time-value-accessor.directive';
import { DatetimeComponent } from './datetime/datetime.component';

@NgModule({
  declarations: [
    SvgIconComponent,
    SpinnerComponent,
    EnumDisplayPipe,
    ResultTableComponent,
    PaginationComponent,
    PageLoadingIndicatorComponent,
    PageHeaderComponent,
    TimeValueAccessorDirective,
    DatetimeComponent,
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    EnumDisplayPipe,
    SpinnerComponent,
    SvgIconComponent,
    ResultTableComponent,
    PaginationComponent,
    PageLoadingIndicatorComponent,
    PageHeaderComponent,
    TimeValueAccessorDirective
  ]
})
export class MuziehComponentsModule { }

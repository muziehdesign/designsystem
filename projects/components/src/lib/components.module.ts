import { CommonModule, DatePipe } from '@angular/common';
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
import { AlertComponent } from './alert/alert.component';
import { PhoneNumberPipe } from './phone-number/phone-number.pipe';
import { DateDisplayPipe } from './date-display/date-display.pipe';
import { SortDirective } from './sort.directive';
import { SortableDirective } from './sortable.directive';

@NgModule({
  declarations: [
    SvgIconComponent,
    SpinnerComponent,
    EnumDisplayPipe,
    ResultTableComponent,
    PaginationComponent,
    PageLoadingIndicatorComponent,
    PageHeaderComponent,
    TimeValueValidatorDirective,
    DateDisplayPipe,
    PhoneNumberPipe,
    AlertComponent,
    SortDirective,
    SortableDirective
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
    TimeValueValidatorDirective,
    DateDisplayPipe,
    AlertComponent,
    PhoneNumberPipe,
    SortDirective,
    SortableDirective
  ],
  providers: [
    DatePipe
  ]
})
export class MuziehComponentsModule { }

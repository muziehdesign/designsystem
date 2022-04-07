import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { SpinnerComponent } from './spinner/spinner.component';
import { EnumDisplayPipe } from './enum-display/enum-display.pipe';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { ResultTableComponent } from './result-table/result-table.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PageLoadingIndicatorComponent } from './page-loading-indicator/page-loading-indicator.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { TimeValueAccessorDirective } from './time-value-accessor.directive';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { PhoneNumberPipe } from './phone-number/phone-number.pipe';
import { DateDisplayPipe } from './date-display/date-display.pipe';
import { MuziehDateTimeModule } from './date-time/date-time.module';
import { SortDirective } from './sort.directive';
import { SortKeyDirective } from './sort-key.directive';
import { ButtonDirective } from './button.directive';

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
    DateDisplayPipe,
    PhoneNumberPipe,
    AlertComponent,
    SortKeyDirective,
    SortDirective,
    ButtonDirective,
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    FormsModule,
  ],
  exports: [
    EnumDisplayPipe,
    SpinnerComponent,
    SvgIconComponent,
    ResultTableComponent,
    PaginationComponent,
    PageLoadingIndicatorComponent,
    PageHeaderComponent,
    TimeValueAccessorDirective,
    DateDisplayPipe,
    AlertComponent,
    PhoneNumberPipe,
    MuziehDateTimeModule,
    SortKeyDirective,
    SortDirective,
    ButtonDirective,
  ],
  providers: [
    DatePipe,
  ]
})
export class MuziehComponentsModule { }

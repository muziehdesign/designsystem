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
import { SubjectDisplayPipe } from './subject-display/subject-display.pipe';
import { ButtonDirective } from './button.directive';
import { WizardProgressTrackerComponent } from './wizard-progress-tracker/wizard-progress-tracker.component';
import { InlineMessageModule } from './inline-message/inline-mesage.module';

@NgModule({
  declarations: [
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
    SubjectDisplayPipe
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    FormsModule,
    ButtonDirective,
    SvgIconComponent,
    SpinnerComponent,
    WizardProgressTrackerComponent,
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
    SubjectDisplayPipe,
    ButtonDirective,
    WizardProgressTrackerComponent,
    InlineMessageModule
  ],
  providers: [
    DatePipe,
  ]
})
export class MuziehComponentsModule { }

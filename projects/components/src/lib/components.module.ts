import { CommonModule, DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { MzSpinner } from './spinner/spinner.component';
import { EnumDisplayPipe } from './enum-display/enum-display.pipe';
import { SvgIconComponent } from './svg-icon/svg-icon.component';
import { ResultTableComponent } from './result-table/result-table.component';
import { MzPagination } from './pagination/pagination.component';
import { PageLoadingIndicatorComponent } from './page-loading-indicator/page-loading-indicator.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { FormsModule } from '@angular/forms';
import { MzAlert } from './alert/alert.component';
import { PhoneNumberPipe } from './phone-number/phone-number.pipe';
import { DateDisplayPipe } from './date-display/date-display.pipe';
import { SortDirective } from './sort.directive';
import { SortKeyDirective } from './sort-key.directive';
import { SubjectDisplayPipe } from './subject-display/subject-display.pipe';
import { ButtonDirective } from './button.directive';
import { WizardProgressTrackerComponent } from './wizard-progress-tracker/wizard-progress-tracker.component';
import { InfiniteScrollComponent } from './infinite-scroll/infinite-scroll.component';

/**
 * @deprecated Import components and component modules separately.
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ButtonDirective,
    SvgIconComponent,
    MzSpinner,
    WizardProgressTrackerComponent,
    MzAlert,
    EnumDisplayPipe,
    ResultTableComponent,
    InfiniteScrollComponent,
    MzPagination,
    PageLoadingIndicatorComponent,
    PageHeaderComponent,
    DateDisplayPipe,
    PhoneNumberPipe,
    SortKeyDirective,
    SortDirective,
    SubjectDisplayPipe,
  ],
  exports: [
    EnumDisplayPipe,
    MzSpinner,
    SvgIconComponent,
    ResultTableComponent,
    InfiniteScrollComponent,
    MzPagination,
    PageLoadingIndicatorComponent,
    PageHeaderComponent,
    DateDisplayPipe,
    MzAlert,
    PhoneNumberPipe,
    SortKeyDirective,
    SortDirective,
    SubjectDisplayPipe,
    ButtonDirective,
    WizardProgressTrackerComponent,
  ],
  providers: [
    DatePipe,
  ]
})
export class MuziehComponentsModule { }

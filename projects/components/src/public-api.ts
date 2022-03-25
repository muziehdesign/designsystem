/*
 * Public API Surface of components
 */

export * from './lib/enum-display/enum-display.pipe';
export * from './lib/spinner/spinner.component';
export * from './lib/svg-icon/svg-icon.component';
export * from './lib/components.module';
export * from './lib/component.config';
export * from './lib/component-config.token';
export * from './lib/page-loading-indicator/page-loading-indicator.component';
export * from './lib/page-header/page-header.component';
export * from './lib/phone-number/phone-number.pipe';
export * from './lib/date-display/date-display.pipe';

// table
export * from './lib/result-table/result-table.component';
export * from './lib/pagination/pagination.component';
export * from './lib/models/page-event';
export * from './lib/models/loading-state';
export * from './lib/result-table/result-table.model';

// time value
export * from './lib/time-value-validator.directive';
export * from './lib/time-value-accessor.directive';

// Datetime
export {
  MuziehDateTimeModule,
  DateTimeComponent,
  TimeValue,
} from './lib/date-time/date-time.module';

// testing files
export * from './lib/testing/muzieh-component-harness';
export * from './lib/testing/result-table-harness';

// alert
export * from './lib/alert/alert.component';

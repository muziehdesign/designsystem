import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateTimeComponent } from './date-time.component';
export { DateTimeComponent, TimeValue } from './date-time.component';

@NgModule({
  declarations: [
    DateTimeComponent,
  ],
  imports: [
    CommonModule,
    MatDatepickerModule
  ],
  exports: [
    DateTimeComponent,
  ],
})
export class MuziehDateTimeModule { }

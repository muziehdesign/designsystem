import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
    selector: 'app-datetime-picker-guidelines',
    templateUrl: './datetime-picker-guidelines.component.html',
    styleUrls: ['./datetime-picker-guidelines.component.scss'],
    imports: [CommonModule, FormsModule, MatDatepickerModule, MatNativeDateModule]
})
export class DatetimePickerGuidelinesComponent {

  dateTime: Date | undefined | null =  null;
  dateTimeMinMax: Date | undefined | null =  null;
  min: Date = new Date('03/10/2022');
  max: Date = new Date('03/20/2022');

  deactivationDate: Date = new Date();

  constructor() { }

  onDeactivationDateChange() {
    console.log(this.deactivationDate);
  }

  setDatetime(s: string | null) {
    this.dateTime = (s !== null) ? new Date(s) : null;
  }
}

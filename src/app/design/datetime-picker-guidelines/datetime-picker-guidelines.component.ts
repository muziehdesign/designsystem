import { Component, OnInit } from '@angular/core';
import { TimeValue } from 'projects/components/src/lib/models/time-value';

@Component({
  selector: 'app-datetime-picker-guidelines',
  templateUrl: './datetime-picker-guidelines.component.html',
  styleUrls: ['./datetime-picker-guidelines.component.scss'],
})
export class DatetimePickerGuidelinesComponent {

  dateTime: Date | undefined | null =  null;

  defaultScheduleInputModel: ScheduleInputModel = { time: { hour: 10, minute: 30 } };
  deactivationDate: Date = new Date();

  constructor() { }

  changeScheduledRunTime(e: any) {
    console.log(e);
    console.log(this.defaultScheduleInputModel.time);
  }

  setScheduleRunTime(s: TimeValue) {
    console.log(s);
    this.defaultScheduleInputModel.time = s;
  }

  onDeactivationDateChange() {
    console.log(this.deactivationDate);
  }

  setDatetime(s: string) {
    this.dateTime = new Date(s);
  }

  onDateTimeChange(): void {
    console.log("Data: ", this.dateTime);
  }
}

export interface ScheduleInputModel {
  time: TimeValue
}

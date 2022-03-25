import { Component } from '@angular/core';
import { TimeValue } from 'dist/components/muzieh-ngcomponents';

@Component({
  selector: 'app-datetime-picker-guidelines',
  templateUrl: './datetime-picker-guidelines.component.html',
  styleUrls: ['./datetime-picker-guidelines.component.scss'],
})
export class DatetimePickerGuidelinesComponent {

  dateTime: Date | undefined | null =  null;
  dateTimeMinMax: Date | undefined | null =  null;
  min: Date = new Date('03/10/2022');
  max: Date = new Date('03/20/2022');

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
}

export interface ScheduleInputModel {
  time: TimeValue
}

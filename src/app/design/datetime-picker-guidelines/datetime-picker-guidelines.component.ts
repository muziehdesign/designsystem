import { Component, OnInit } from '@angular/core';
import { TimeValue } from 'projects/components/src/lib/models/time-value';

@Component({
  selector: 'app-datetime-picker-guidelines',
  templateUrl: './datetime-picker-guidelines.component.html',
  styleUrls: ['./datetime-picker-guidelines.component.scss'],
})
export class DatetimePickerGuidelinesComponent implements OnInit {

  dateTime: Date | undefined;

  defaultScheduleInputModel: ScheduleInputModel = { time: { hour: 10, minute: 30 } };
  deactivationDate: Date = new Date();

  constructor() { }

  ngOnInit(): void {
    this.setDatetime('2022-06-12T21:00');
  }

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
    //console.log('setting to ', s);
    this.dateTime = new Date(s);
  }
}

export interface ScheduleInputModel {
  time: TimeValue
}

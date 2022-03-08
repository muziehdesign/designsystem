import { Component, OnInit } from '@angular/core';
import { TimeValue } from 'projects/components/src/lib/models/time-value';

@Component({
  selector: 'app-datetime-picker-guidelines',
  templateUrl: './datetime-picker-guidelines.component.html',
  styleUrls: ['./datetime-picker-guidelines.component.scss']
})
export class DatetimePickerGuidelinesComponent implements OnInit {

  defaultScheduleInputModel: ScheduleInputModel = { time: { hour: 10, minute: 30 } };
  constructor() { }

  ngOnInit(): void {
  }

  changeScheduledRunTime(e: any) {
    console.log(e);
    console.log(this.defaultScheduleInputModel.time);
  }
}

export interface ScheduleInputModel {
  time: TimeValue
}

import { ChangeDetectorRef, Component, forwardRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'mz-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DatetimeComponent),
    multi: true
  }]
})
export class DatetimeComponent implements OnInit, ControlValueAccessor, OnChanges {

  model: Date | undefined;
  defaultScheduleInputModel: ScheduleInputModel = { time: { hour: 10, minute: 30 } };
  deactivationDate: Date = new Date();

  constructor(private _cd: ChangeDetectorRef) { }

  onChange = (_: any) => {};
  onTouched = () => {};

  registerOnChange(fn: any): void {

  }
  registerOnTouched(fn: any): void {

  }

  writeValue(value: any) {
    this.model = value;
    this._cd.markForCheck();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.model)
  }

  ngOnInit(): void {
    console.log(this.model)
  }

  changeScheduledRunTime(e: any) {
    console.log(e);
    //console.log(this.defaultScheduleInputModel.time);
  }

  setScheduleRunTime(s: TimeValue) {
    //this.defaultScheduleInputModel.time = s;
  }

  onDeactivationDateChange() {
    console.log(this.deactivationDate);
  }

  updateTime(val: any):void {

  }

  updateDate(val: any): void {

  }
}

export interface ScheduleInputModel {
  time: TimeValue
}

export interface TimeValue {
  hour: number;
  minute: number;
}

import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'mz-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: DatetimeComponent,
    multi: true
  }]
})
export class DatetimeComponent implements ControlValueAccessor {

  date: Date | undefined;
  time: String | undefined;
  tempDate: string | undefined | null = null;
  tempTime: string | null = null;

  @Input()
  min?: Date | undefined;

  @Input()
  max?: Date | undefined;

  constructor(private _cd: ChangeDetectorRef) { }

  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(value: Date) {
    if (value) {
      this.date = value;
      const hourPrefix = value.getHours() > 9 ? '' : '0';
      const minutePrefix = value.getMinutes() > 9 ? '' : '0';
      this.time = `${hourPrefix}${value.getHours()}:${minutePrefix}${value.getMinutes()}`;
      this._cd.markForCheck();
    }
  }

  registerOnChange(fn: (value: any) => any): void { this.onChange = fn; }

  registerOnTouched(fn: any): void { this.onTouched = fn; }

  updateDate(val: any): void {
    this.tempDate = val.target.value.toString();
    this.propagateModelCahnge();
  }

  updateTime(val: string):void {
    this.tempTime = val.toString();
    this.propagateModelCahnge();
  }

  updateDateEvent(event: MatDatepickerInputEvent<Date>) {
    const date = `${event.value?.getMonth()}/${event.value?.getDate()}/${event.value?.getFullYear()}`;
    this.tempDate = date;
    this.propagateModelCahnge();
  }

  private propagateModelCahnge(): void {
    if (this.tempDate && this.tempTime) {
      const dateString = `${this.tempDate} ${this.tempTime}`;
      this.onChange(new Date(dateString));
    } else {
      this.onChange(null);
    }
  }
}

export interface ScheduleInputModel {
  time: TimeValue
}

export interface TimeValue {
  hour: number;
  minute: number;
}

import { ChangeDetectorRef, Component, forwardRef, HostListener, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'mz-datetime',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DatetimeComponent),
    multi: true
  }]
})
export class DatetimeComponent implements ControlValueAccessor {

  model: Date | undefined;
  time: String | undefined;
  tempDate: string | null = null;
  tempTime: string | null = null;

  constructor(private _cd: ChangeDetectorRef) { }

  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(value: Date) {
    if (value) {
      this.model = value;
      const hourPrefix = value.getHours() > 9 ? '' : '0';
      const minutePrefix = value.getMinutes() > 9 ? '' : '0';
      this.time = `${hourPrefix}${value.getHours()}:${minutePrefix}${value.getMinutes()}`;
      this._cd.markForCheck();
    }
  }

  registerOnChange(fn: (value: any) => any): void { this.onChange = fn; }

  registerOnTouched(fn: any): void { this.onTouched = fn; }

  updateDate(val: string): void {
    this.tempDate = val.toString();
    this.propagateModelCahnge();
  }

  updateTime(val: string):void {
    this.tempTime = val.toString();
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

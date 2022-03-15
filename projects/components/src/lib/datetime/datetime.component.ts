import { ChangeDetectorRef, Component, forwardRef, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
export class DatetimeComponent implements ControlValueAccessor, OnChanges {

  model: Date | undefined;
  time: String | undefined;
  deactivationDate: Date = new Date();

  constructor(private _cd: ChangeDetectorRef) { }

  @HostListener('input', ['$event.target.value'])
  onChange = (_: any) => {};
  onTouched = () => {};

  registerOnTouched(fn: any): void {

  }

  writeValue(value: Date) {
    if (value) {
      this.model = value;
      const hourPrefix = value.getHours() > 9 ? '' : '0';
      const minutePrefix = value.getMinutes() > 9 ? '' : '0';
      this.time = `${hourPrefix}${value.getHours()}:${minutePrefix}${value.getMinutes()}`;
      this._cd.markForCheck();
    }
  }

  registerOnChange(fn: (x: any | null) => void): void {
    this.onChange = (value) => {
      console.log(value)
      /*if (value === null || value === '') {
        fn(null);
      } else {
        const parts = value.split(':');
        fn({ hour: Number(parts[0]), minute: Number(parts[1]) } as TimeValue);
      }*/
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('On changes', this.model)
  }

  updateTime(val: any):void {
    console.log('Time change:', val);
  }

  updateDate(val: any): void {
    console.log('Date change:', val);
  }
}

export interface ScheduleInputModel {
  time: TimeValue
}

export interface TimeValue {
  hour: number;
  minute: number;
}

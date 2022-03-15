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
export class DatetimeComponent implements OnInit, ControlValueAccessor, OnChanges {

  model: Date | undefined;
  //time: TimeValue = { hour: 10, minute: 30 } ;
  time: TimeValue | undefined;
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
      //this.time = `${value.getHours()}:${value.getMinutes()}`;
      this.time = { hour: value.getHours(), minute: value.getMinutes() } as TimeValue;
      //console.log(this.time)
      this._cd.markForCheck();
    }
  }

  registerOnChange(fn: (x: TimeValue | null) => void): void {
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

  ngOnInit(): void {
    //console.log(this.model)
  }

  changeScheduledRunTime(e: any) {
    console.log(e);
  }

  setScheduleRunTime(s: TimeValue) {
  }

  onDeactivationDateChange() {
    console.log(this.deactivationDate);
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

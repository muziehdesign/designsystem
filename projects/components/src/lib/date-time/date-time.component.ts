import { ChangeDetectorRef, Component, forwardRef, Input, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { TimeValue } from './time-value';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
    selector: 'mz-datetime',
    templateUrl: './date-time.component.html',
    styleUrls: ['./date-time.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DateTimeComponent),
            multi: true,
        },
    ],
})
export class DateTimeComponent implements ControlValueAccessor {
    date: Date | undefined;
    time: String | undefined;
    private tempDate: string | undefined | null = null;
    private tempTime: string | null = null;
    type = 'outline';
    @ViewChild('datePicker') datepicker!: MatDatepicker<Date>;

    @Input()
    min?: Date | undefined;

    @Input()
    max?: Date | undefined;

    @Input()
    disabled?: boolean;

    constructor(private _cd: ChangeDetectorRef) {}

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

    registerOnChange(fn: (value: any) => any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    updateDate(val: any): void {
        this.tempDate = val.target.value.toString();
        this.propagateModelChange();
    }

    updateTime(val: string): void {
        this.tempTime = val.toString();
        this.propagateModelChange();
    }

    updateDateEvent(event: MatDatepickerInputEvent<Date>) {
        let value;
        if (event.value) {
            value = event.value;
            const date = `${value.getMonth() + 1}/${value.getDate()}/${value.getFullYear()}`;
            this.tempDate = date;
            this.propagateModelChange();
        }
    }

    focusOnDateInput() {
        this.datepicker.open();
    }

    private propagateModelChange(): void {
        if (!this.tempDate && this.date) {
            this.date = new Date(this.date);
            const date = `${this.date.getMonth() + 1}/${this.date.getDate()}/${this.date.getFullYear()}`;
            this.tempDate = date;
        }

        if (this.tempTime) {
            const dateString = `${this.tempDate} ${this.tempTime}`;
            this.onChange(new Date(dateString));
        } else {
            this.onChange(null);
        }
    }
}

export interface ScheduleInputModel {
    time: TimeValue;
}

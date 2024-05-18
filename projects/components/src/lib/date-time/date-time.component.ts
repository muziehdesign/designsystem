import { ChangeDetectorRef, Component, forwardRef, Input, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatDatepickerInputEvent, MatDatepickerModule } from '@angular/material/datepicker';
import { TimeValue } from './time-value';
import { MatDatepicker } from '@angular/material/datepicker';
import { CommonModule } from '@angular/common';

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
    imports: [CommonModule, MatDatepickerModule],
    standalone: true,
})
export class DateTimeComponent implements ControlValueAccessor {
    date: Date | undefined;
    time: string | undefined;

    private lz = (n: number) => ('0' + n).slice(-2);
    private formatDate = (dt: Date) => `${dt.getMonth() + 1}/${dt.getDate()}/${dt.getFullYear()}`;
    private formatTime = (t: Date) => `${this.lz(t.getHours())}:${this.lz(t.getMinutes())}`;
    private formatDateTime = (dt: Date, t: string) => `${this.formatDate(dt)} ${t}`;
    private limitDate = (dt: Date) => {
        if (this.min) {
            dt = new Date(Math.max(dt.getTime(), this.min.getTime()));
        }

        if (this.max) {
            dt = new Date(Math.min(dt.getTime(), this.max.getTime()));
        }

        return dt;
    };
    private onTimeHourPending = false; 

    type = 'outline';
    @ViewChild('datePicker') datepicker!: MatDatepicker<Date>;

    @Input()
    min?: Date | undefined;

    @Input()
    max?: Date | undefined;

    @Input()
    disabled = false;

    constructor(private _cd: ChangeDetectorRef) {}

    onChange = (_: any) => {};
    onTouched = () => {};

    writeValue(value: Date) {
        if (value) {
            const dt = new Date(value);

            this.date = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate());
            this.time = this.formatTime(value);
        } else {
            this.date = undefined;
            this.time = undefined;
        }

        this._cd.markForCheck();
    }

    registerOnChange(fn: (value: any) => any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    updateDate(e: Event): void {
        const input = e.target as HTMLInputElement;

        let dt = new Date(input.value);

        if (!isNaN(dt.getTime())) {
            dt = this.limitDate(dt);

            this.date = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate());

            if (this.time === undefined || this.time === '') {
                this.time = this.formatTime(new Date());
            }
        } else {
            this.date = undefined;
            this.time = undefined;
        }

        this.propagateModelChange();
        this._cd.markForCheck();
    }

    updateTime(e: Event): void {
        const input = e.target as HTMLInputElement;

        // this is just a listener event in case the end user types in "0". We wait for
        // the next entered value for the time input field to self fix the problem.
        if (!this.onTimeHourPending && !input.value) {
            this.onTimeHourPending = true;
            return;
        }

        this.onTimeHourPending = false;

        if (!input.value) {
            this.date = undefined;
        } else if (!this.date || isNaN(this.date.getTime())) {
            const dt = this.limitDate(this.min ?? new Date());

            this.date = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate());
        }
        this.time = input.value;

        this.propagateModelChange();
    }

    updateDateEvent(event: MatDatepickerInputEvent<Date>) {
        if (event.value) {
            const dt = this.limitDate(new Date(event.value));

            this.date = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate());

            if (this.time === undefined || this.time === '') {
                this.time = this.formatTime(new Date());
            }
        } else {
            this.date = undefined;
            this.time = undefined;
        }

        this.propagateModelChange();
        this._cd.markForCheck();
    }

    focusOnDateInput() {
        this.datepicker.open();
    }

    private propagateModelChange(): void {
        if (this.time && this.date) {
            const dateString = this.formatDateTime(this.date, this.time);
            this.onChange(new Date(dateString));
        } else {
            this.onChange(undefined);
        }
    }
}

export interface ScheduleInputModel {
    time: TimeValue;
}

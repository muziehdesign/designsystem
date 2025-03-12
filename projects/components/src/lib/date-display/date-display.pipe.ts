import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

/**
 * @deprecated use mzDate instead
 */
@Pipe({
    name: 'mzDateDisplay',
    standalone: true,
})
export class DateDisplayPipe implements PipeTransform {
    constructor(private datePipe: DatePipe) {}

    transform(value: Date | string, format?: string): string | null {
        let redefinedDate;
        if (format === 'concise') {
            redefinedDate = this.datePipe.transform(value, 'MM/dd/yyyy');
        } else if(format === 'detailed') {
            redefinedDate = this.datePipe.transform(value, 'MM/dd/yyyy h:mm:ss a');
        } else {
          redefinedDate = this.datePipe.transform(value, 'MM/dd/yyyy');
        }
        return redefinedDate;
    }
}
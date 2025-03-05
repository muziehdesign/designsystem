import { DatePipe } from '@angular/common';
import { Inject, LOCALE_ID, Pipe } from '@angular/core';
import { DATE_PIPE_CONFIG_OPTIONS, MZ_DATE_PIPE_DEFAULT_OPTIONS, MzDatePipeConfig } from './date-display-config';

@Pipe({
    name: 'mzDate',
    standalone: true,
})
export class MzDatePipe extends DatePipe {
    private options: MzDatePipeConfig;
    constructor(@Inject(LOCALE_ID) locale: string, @Inject(MZ_DATE_PIPE_DEFAULT_OPTIONS) defaultMzOptions?: (MzDatePipeConfig | null) | undefined) {
        const o = defaultMzOptions || DATE_PIPE_CONFIG_OPTIONS;
        super(locale, null, o);
        this.options = o;
    }
    override transform(value: string | number | Date, format?: string | undefined, timezone?: string | undefined, locale?: string | undefined): string | null;
    override transform(value: null | undefined, format?: string | undefined, timezone?: string | undefined, locale?: string | undefined): null;
    override transform(value: string | number | Date | null | undefined, format?: string | undefined, timezone?: string | undefined, locale?: string | undefined): string | null;
    override transform(value: Date | string | number | null | undefined, format?: string, timezone?: string, locale?: string): string | null {
        let translatedFormat = format;
        let translatedTimezone = timezone;

        if (format) {
            translatedFormat = this.options.formats.get(format) || format;
        }
        if(timezone === 'original' && typeof value === 'string') {
          const match = value.match(/([+-]\d{2}:\d{2})$/);
          translatedTimezone = match ? match[1] : '+00:00';
        }

        return super.transform(value, translatedFormat, translatedTimezone, locale);
    }
}

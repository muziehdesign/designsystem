import { DatePipeConfig } from "@angular/common";
import { InjectionToken } from "@angular/core"

export const DATE_PIPE_CONFIG_OPTIONS = Object.freeze({
    formats: new Map<string, string>([
        ['short', 'MM/dd/yyyy hh:mm a'],
        ['medium', 'MMM d y h:mm:ss a'],
        ['shortDate', 'MM/dd/yyyy'],
        ['mediumDate', 'MMM d y']
    ]),
    dateFormat: 'MM/dd/yyyy hh:mm a'
} satisfies MzDatePipeConfig);

export interface MzDatePipeConfig extends DatePipeConfig {
    formats: Map<string, string>
}

export const MZ_DATE_PIPE_DEFAULT_OPTIONS = new InjectionToken<MzDatePipeConfig>('MzDateDisplayDefaultOptions');
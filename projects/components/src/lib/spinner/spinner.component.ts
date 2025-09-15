import { Component, HostBinding, Input, input } from '@angular/core';

@Component({
    selector: 'mz-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.scss'],
    imports: [],
})
export class MzSpinner {
    @Input() size: SpinnerSize = 'medium';
    @Input() appearance: SpinnerAppearance = 'primary';

    @HostBinding('class')
    get elementClass(): string {
        return [`${this.size}`, `${this.appearance}`].join(' ');
    }
}

export type SpinnerSize = 'medium' | 'large';
export type SpinnerAppearance = 'primary' | 'secondary';

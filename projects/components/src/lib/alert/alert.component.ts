import { Component, input } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';
import { AlertAppearance } from './alert-appearance';

@Component({
    selector: 'mz-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss'],
    imports: [SvgIconComponent]
})
export class MzAlert {
    title = input<string>('');
    appearance = input<AlertAppearance>('info');

    getAlertClass(): string {
        return `alert-${this.appearance()}`;
    }

    getAlertIcon(): string {
        let icon = 'information-circle-solid';
        if (this.appearance() === 'success') {
            icon = 'check-circle-solid';
        } else if (this.appearance() === 'danger') {
            icon = 'x-circle-solid';
        } else if (this.appearance() === 'warning') {
            icon = 'exclamation-triangle-solid';
        }
        return icon;
    }
}

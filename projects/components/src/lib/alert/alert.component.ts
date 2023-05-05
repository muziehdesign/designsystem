import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
    selector: 'mz-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css'],
    imports: [CommonModule, SvgIconComponent],
    standalone: true,
})
export class AlertComponent implements OnInit {
    @Input() title: string = '';
    @Input() type: 'info' | 'success' | 'error' | 'warning' = 'info';
    @Input() body: TemplateRef<any> | undefined | null;
    @Input() footer: TemplateRef<any> | undefined | null;

    constructor() {}

    ngOnInit(): void {}

    getAlertClass(): string {
        return `alert-${this.type}`;
    }

    getAlertIcon(): string {
        let icon = '';
        if (this.type === 'info') {
            icon = 'information-circle';
        } else if (this.type === 'success') {
            icon = 'check-circle';
        } else if (this.type === 'error') {
            icon = 'x-circle';
        } else if (this.type === 'warning') {
            icon = 'exclamation';
        }
        return icon;
    }
}

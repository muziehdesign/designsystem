import { Component, input } from '@angular/core';
import { SvgIconComponent } from '../../svg-icon/svg-icon.component';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
    selector: 'mz-dialog-header',
    templateUrl: './dialog-header.component.html',
    styleUrl: './dialog-header.component.scss',
})
export class MzDialogHeader {
    title = input<string>('');

    constructor() { }
}

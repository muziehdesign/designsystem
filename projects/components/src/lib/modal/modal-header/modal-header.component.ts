import { Component, input, Optional } from '@angular/core';
import { ModalAppearance } from '../modal-appearance';
import { SvgIconComponent } from '../../svg-icon/svg-icon.component';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
    selector: 'mz-modal-header',
    imports: [SvgIconComponent],
    templateUrl: './modal-header.component.html',
    styleUrl: './modal-header.component.scss',
    host: {
        '[class.header-danger]': 'appearance() === "danger"',
        '[class.header-warning]': 'appearance() === "warning"',
    }
})
export class MzModalHeader {
    appearance = input<ModalAppearance | undefined>(undefined);
    title = input<string>('');

    constructor(protected readonly dialogRef: DialogRef) { }

    close() {
        this.dialogRef.close();
    }
}

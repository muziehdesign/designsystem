import { Component, input } from '@angular/core';
import { SvgIconComponent } from '../../svg-icon/svg-icon.component';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
    selector: 'mz-modal-header',
    imports: [SvgIconComponent],
    templateUrl: './modal-header.component.html',
    styleUrl: './modal-header.component.scss',
})
export class MzModalHeader {
    title = input<string>('');

    constructor(protected readonly dialogRef: DialogRef) { }

    close() {
        this.dialogRef.close();
    }
}

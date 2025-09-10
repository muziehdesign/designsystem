import { Component, input, Optional } from '@angular/core';
import { ModalAppearance } from '../modal-appearance';
import { SvgIconComponent } from '../../svg-icon/svg-icon.component';
import { DialogRef } from '@angular/cdk/dialog';
import { MzModalConfig } from '../modal.service';

@Component({
    selector: 'mz-modal-header',
    imports: [SvgIconComponent],
    templateUrl: './modal-header.component.html',
    styleUrl: './modal-header.component.scss',
})
export class MzModalHeader {
    appearance = input<ModalAppearance | undefined>(undefined);
    title = input<string>('');

    constructor(@Optional() protected readonly modalConfig: MzModalConfig, private readonly dialogRef: DialogRef) { }

    close() {
        this.dialogRef.close();
    }
}

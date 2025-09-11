import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { MessageModalData } from './message-modal-data';
import { MzModalHeader } from '../modal-header/modal-header.component';
import { ButtonDirective } from '../../button.directive';
import { MzModalFooter } from '../modal-footer/modal-footer.component';
import { MzModalContent } from '../modal-content/modal-content.component';

@Component({
    selector: 'mz-message-modal',
    imports: [MzModalHeader, MzModalFooter, ButtonDirective, MzModalContent],
    templateUrl: './message-modal.component.html',
    styleUrl: './message-modal.component.scss',
})
export class MzMessageModal {
    constructor(private dialogRef: DialogRef, @Inject(DIALOG_DATA) protected data: MessageModalData) {}

    ok() {
        this.dialogRef.close(true);
    }

    close() {
        this.dialogRef.close(false);
    }
}

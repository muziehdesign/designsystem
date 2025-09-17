import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { MessageDialogData } from './message-dialog-data';
import { MzDialogHeader } from '../dialog-header/dialog-header.component';
import { MzDialogFooter } from '../dialog-footer/dialog-footer.component';
import { MzDialogContent } from '../dialog-content/dialog-content.component';
import { MzButton } from '../../button/button.component';

@Component({
    selector: 'mz-message-dialog',
    imports: [MzDialogHeader, MzDialogFooter, MzButton, MzDialogContent],
    templateUrl: './message-dialog.component.html',
    styleUrl: './message-dialog.component.scss',
})
export class MzMessageDialog {
    constructor(private dialogRef: DialogRef, @Inject(DIALOG_DATA) protected data: MessageDialogData) {}

    ok() {
        this.dialogRef.close(true);
    }

    close() {
        this.dialogRef.close(false);
    }
}

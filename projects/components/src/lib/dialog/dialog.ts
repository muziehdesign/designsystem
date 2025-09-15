import { Dialog, DialogConfig, DialogRef } from '@angular/cdk/dialog';
import { ComponentType } from '@angular/cdk/overlay';
import { Inject, Injectable, Injector, Optional, TemplateRef } from '@angular/core';
import { MzDialogContainer } from './dialog-container/dialog-container.component';
import { MzMessageDialog } from './message-dialog/message-dialog.component';
import { DialogAppearance } from './dialog-appearance';
import { firstValueFrom } from 'rxjs';
import { MessageDialogData } from './message-dialog/message-dialog-data';
import { MZ_DIALOG_DEFAULT_OPTIONS, MzDialogConfig } from './dialog-config';

@Injectable({
    providedIn: 'root',
})
export class MzDialog {
    private cdkDialog: Dialog;
    constructor(injector: Injector, @Optional() @Inject(MZ_DIALOG_DEFAULT_OPTIONS) private defaultOptions: DialogConfig<any>) {
        this.cdkDialog = injector.get(Dialog);
    }

    /**
     * Displays a message modal dialog.
     * @param title The title of the dialog.
     * @param message The message to display.
     * @param action The text for the action button. Not displayed if empty.
     * @param cancelAction The text for the cancel button. Not displayed if empty.
     * @param appearance The appearance of the dialog.
     * @returns A reference to the opened dialog.
     */
    display(title: string, message: string, action: string = 'OK', cancelAction: string = '', appearance?: DialogAppearance): DialogRef<void, MzMessageDialog> {
        return this.open(MzMessageDialog, { data: { title: title, message: message, appearance: appearance, action: action, cancelAction: cancelAction } satisfies MessageDialogData, hasBackdrop: true });
    }

    /**
     * Opens a confirmation modal dialog.
     * @param title The title of the dialog.
     * @param message The message to display in the dialog.
     * @param action The text for the OK button.
     * @param cancelAction The text for the Cancel button. Not displayed if empty.
     * @param appearance The appearance of the dialog.
     * @returns A promise that resolves to true if the user confirmed, false if canceled, undefined if dismissed.
     */
    confirm(title: string, message: string, action: string = 'OK', cancelAction: string = 'Cancel', appearance?: DialogAppearance): Promise<boolean | undefined> {
        const ref = this.open(MzMessageDialog, { data: { title: title, message: message, appearance: appearance, action: action, cancelAction: cancelAction } satisfies MessageDialogData, hasBackdrop: true });
        return firstValueFrom(ref.closed) as Promise<boolean | undefined>;
    }

    open<R = any, D = any, T = any>(template: TemplateRef<T>, config?: MzDialogConfig<D>): DialogRef<R, T>;
    open<R = any, D = any, T = any>(component: ComponentType<T>, config?: MzDialogConfig<D>): DialogRef<R, T>;
    open<R = any, D = any, T = any>(templateOrComponent: TemplateRef<T> | ComponentType<T>, config?: MzDialogConfig<D>): DialogRef<R, T> {
        const defaults = this.defaultOptions || new MzDialogConfig<D>();
        const options = { ...defaults, ...config };
        const dialogConfig = {
            panelClass: options.panelClass,
            hasBackdrop: options.hasBackdrop,
            backdropClass: options.backdropClass,
            disableClose: options.disableClose,
            width: options.width,
            height: options.height,
            minWidth: options.minWidth,
            minHeight: options.minHeight,
            maxWidth: options.maxWidth,
            maxHeight: options.maxHeight,
            data: options.data,
            autoFocus: options.autoFocus,
            restoreFocus: options.restoreFocus,
            closeOnNavigation: true,
            closeOnDestroy: true,
            closeOnOverlayDetachments: true,
            container: MzDialogContainer,
        } satisfies DialogConfig<D, R, MzDialogContainer>;
        const ref = this.cdkDialog.open<R, D, T>(templateOrComponent, dialogConfig);
        return ref;
    }
}

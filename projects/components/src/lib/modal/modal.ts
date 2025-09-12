import { Dialog, DialogConfig, DialogRef } from '@angular/cdk/dialog';
import { ComponentType } from '@angular/cdk/overlay';
import { Inject, Injectable, Injector, Optional } from '@angular/core';
import { MzModalContainer } from './modal-container/modal-container.component';
import { MzMessageModal } from './message-modal/message-modal.component';
import { ModalAppearance } from './modal-appearance';
import { firstValueFrom } from 'rxjs';
import { MessageModalData } from './message-modal/message-modal-data';
import { MZ_MODAL_DEFAULT_OPTIONS, MzModalConfig } from './modal-config';

@Injectable({
    providedIn: 'root',
})
export class MzModal {
    private cdkDialog: Dialog;
    constructor(injector: Injector, @Optional() @Inject(MZ_MODAL_DEFAULT_OPTIONS) private defaultOptions: DialogConfig<any>) {
        this.cdkDialog = injector.get(Dialog);
    }

    /**
     * Displays a message modal.
     * @param title The title of the modal.
     * @param message The message to display.
     * @param action The text for the action button. Not displayed if empty.
     * @param cancelAction The text for the cancel button. Not displayed if empty.
     * @param appearance The appearance of the modal.
     * @returns A reference to the opened dialog.
     */
    display(title: string, message: string, action: string = 'OK', cancelAction: string = '', appearance?: ModalAppearance): DialogRef<void, MzMessageModal> {
        return this.open(MzMessageModal, { data: { title: title, message: message, appearance: appearance, action: action, cancelAction: cancelAction } satisfies MessageModalData });
    }

    /**
     * Opens a confirmation dialog.
     * @param title The title of the dialog.
     * @param message The message to display in the dialog.
     * @param action The text for the OK button.
     * @param cancelAction The text for the Cancel button. Not displayed if empty.
     * @param appearance The appearance of the dialog.
     * @returns A promise that resolves to true if the user confirmed, false if canceled, undefined if dismissed.
     */
    confirm(title: string, message: string, action: string = 'OK', cancelAction: string = 'Cancel', appearance?: ModalAppearance): Promise<boolean | undefined> {
        const ref = this.open(MzMessageModal, { data: { title: title, message: message, appearance: appearance, action: action, cancelAction: cancelAction } satisfies MessageModalData });
        return firstValueFrom(ref.closed) as Promise<boolean | undefined>;
    }

    open<R = any, D = any, T = any>(component: ComponentType<T>, config?: MzModalConfig<D>): DialogRef<R, T> {
        const defaults = this.defaultOptions || new MzModalConfig<D>();
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
            /*container: {
                type: MzModalContainer,
                providers: () => [{ provide: MzModalConfig, useValue: options }],
            },
            providers: () => [{ provide: MzModalConfig, useValue: options }],*/
            container: MzModalContainer
        } satisfies DialogConfig<D, R, MzModalContainer>;
        const ref = this.cdkDialog.open<R, D, T>(component, dialogConfig);
        return ref;
    }
}
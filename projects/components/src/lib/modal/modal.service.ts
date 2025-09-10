import { AutoFocusTarget, Dialog, DialogConfig, DialogRef } from '@angular/cdk/dialog';
import { ComponentType } from '@angular/cdk/overlay';
import { BasePortalOutlet } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';
import { MzModalContainer } from './modal-container/modal-container.component';
import { MzMessageModal } from './message-modal/message-modal.component';
import { ModalAppearance } from './modal-appearance';
import { firstValueFrom } from 'rxjs';
import { MessageModalData } from './message-modal/message-modal-data';

@Injectable({
    providedIn: 'root',
})
export class MzModalService {
    private cdkDialog: Dialog;
    constructor(injector: Injector) {
        this.cdkDialog = injector.get(Dialog);
    }

    showMessage(title: string, message: string, okButtonText: string = 'OK', appearance?: ModalAppearance): DialogRef<void, MzMessageModal> {
        return this.open(MzMessageModal, { data: { title: title, message: message, appearance: appearance, okButtonText: okButtonText } satisfies MessageModalData });
    }

    confirm(title: string, message: string, okButtonText: string = 'OK', cancelButtonText: string = 'Cancel', appearance?: ModalAppearance): Promise<boolean | undefined> {
        const ref = this.open(MzMessageModal, { data: { title: title, message: message, appearance: appearance, okButtonText: okButtonText, cancelButtonText: cancelButtonText } satisfies MessageModalData });
        return firstValueFrom(ref.closed) as Promise<boolean | undefined>;
    }

    open<R = any, D = any, T = any>(component: ComponentType<T>, config?: MzModalConfig<D>): DialogRef<R, T> {
        const defaults = new MzModalConfig<D>();
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
            container: {
                type: MzModalContainer,
                providers: () => [{ provide: MzModalConfig, useValue: options }],
            },
            providers: () => [{ provide: MzModalConfig, useValue: options }],
        } satisfies DialogConfig<D>;
        return this.cdkDialog.open(component, dialogConfig);
    }
}

export class MzModalConfig<D = any, C extends BasePortalOutlet = BasePortalOutlet> {
    /** Optional CSS class or classes applied to the overlay panel. */
    panelClass?: string | string[] = '';

    /** Whether the dialog has a backdrop. */
    hasBackdrop?: boolean = true;

    /** Optional CSS class or classes applied to the overlay backdrop. */
    backdropClass?: string | string[] = '';

    /** Whether the dialog closes with the escape key or pointer events outside the panel element. */
    disableClose?: boolean = false;

    /** Width of the dialog. */
    width?: string = '';

    /** Height of the dialog. */
    height?: string = '';

    /** Min-width of the dialog. If a number is provided, assumes pixel units. */
    minWidth?: number | string;

    /** Min-height of the dialog. If a number is provided, assumes pixel units. */
    minHeight?: number | string;

    /** Max-width of the dialog. If a number is provided, assumes pixel units. Defaults to 80vw. */
    maxWidth?: number | string;

    /** Max-height of the dialog. If a number is provided, assumes pixel units. */
    maxHeight?: number | string;

    /** Data being injected into the child component. */
    data?: D | null = null;

    /**
     * Where the dialog should focus on open.
     * @breaking-change 14.0.0 Remove boolean option from autoFocus. Use string or
     * AutoFocusTarget instead.
     */
    autoFocus?: AutoFocusTarget = 'first-tabbable';

    /**
     * Whether the dialog should restore focus to the previously-focused element upon closing.
     * Has the following behavior based on the type that is passed in:
     * - `boolean` - when true, will return focus to the element that was focused before the dialog
     *    was opened, otherwise won't restore focus at all.
     * - `string` - focus will be restored to the first element that matches the CSS selector.
     * - `HTMLElement` - focus will be restored to the specific element.
     */
    restoreFocus?: boolean | string | HTMLElement = true;
}

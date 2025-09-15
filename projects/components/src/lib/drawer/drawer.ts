import { Dialog, DialogConfig } from '@angular/cdk/dialog';
import { ComponentType, Overlay } from '@angular/cdk/overlay';
import { Inject, Injectable, Injector, OnDestroy, Optional, TemplateRef, ViewContainerRef } from '@angular/core';
import { take } from 'rxjs';
import { DEFAULT_MZ_DRAWER_CONFIG, MZ_DRAWER_DATA } from './drawer-injectors';
import { MzDrawerContainer } from './container/drawer-container.component';
import { MzDrawerConfig } from './drawer-config';
import { MzDrawerRef } from './drawer-ref';

@Injectable({
    providedIn: 'root',
})
export class MzDrawer implements OnDestroy {
    private cdkDialog: Dialog;
    private openDialogs: MzDrawerRef<any>[] = [];

    constructor(private injector: Injector, private overlay: Overlay, @Optional() @Inject(DEFAULT_MZ_DRAWER_CONFIG) private configuredOptions: MzDrawerConfig, @Optional() private viewContainerRef?: ViewContainerRef | null) {
        this.cdkDialog = injector.get(Dialog);
    }

    /**
     * Opens a modal dialog containing the given component.
     * @param component Type of the component to load into the dialog.
     * @param config Extra configuration options.
     * @returns Reference to the newly-opened dialog.
     */
    open<R = any, D = any, T = any>(component: ComponentType<T>, config?: MzDrawerConfig<D>): MzDrawerRef<R, T>;
    /**
     * Opens a modal dialog containing the given template.
     * @param template TemplateRef to instantiate as the dialog content.
     * @param config Extra configuration options.
     * @returns Reference to the newly-opened dialog.
     */
    open<R = any, D = any, T = any>(template: TemplateRef<T>, config?: MzDrawerConfig<D>): MzDrawerRef<R, T>;
    open<R = any, D = any, T = any>(componentOrTemplateRef: ComponentType<T> | TemplateRef<T>, config?: MzDrawerConfig<D>): MzDrawerRef<R, T>;
    open<R = any, D = any, T = any>(componentOrTemplateRef: ComponentType<T> | TemplateRef<T>, config?: MzDrawerConfig<D>): MzDrawerRef<R, T> {

        const defaultOptions = new MzDrawerConfig<D>();
        const options = { ...(this.configuredOptions || defaultOptions), ...config };

        // compute closeOnNavigation if left undefined. dialogs need to be destroyed either via navigation or component destruction
        if (options.closeOnNavigation === undefined) {
            options.closeOnNavigation = options.viewContainerRef === undefined && (this.viewContainerRef === undefined || this.viewContainerRef === null);
        }

        let dialogRef: MzDrawerRef<R, T>;
        const cdkRef = this.cdkDialog.open<R, D, T>(componentOrTemplateRef, {
            ...options,
            injector: options.injector,
            viewContainerRef: options.viewContainerRef || this.viewContainerRef || undefined,
            // Disable closing because we want full control of closing behavior, such as animation and confirmation.
            disableClose: true,
            // Disable closing on destroy, because this service cleans up its open dialogs as well.
            closeOnDestroy: true,
            closeOnOverlayDetachments: false,
            closeOnNavigation: options.closeOnNavigation,
            container: {
                type: MzDrawerContainer,
                providers: () => [
                    { provide: MzDrawerConfig, useValue: options },
                    { provide: DialogConfig, useValue: options },
                ],
            },
            templateContext: () => ({ dialogRef }),
            providers: (ref, cdkConfig, dialogContainer) => {
                dialogRef = new MzDrawerRef(ref, options, dialogContainer);
                return [
                    { provide: MZ_DRAWER_DATA, useValue: cdkConfig.data },
                    { provide: MzDrawerRef, useValue: dialogRef },
                ];
            },
        });
        this.openDialogs.push(dialogRef!);
        dialogRef!.closed.pipe(take(1)).subscribe(() => {
            const i = this.openDialogs.indexOf(dialogRef);
            this.openDialogs.splice(i, 1);
        });

        if (cdkRef.containerInstance instanceof MzDrawerContainer) {
            cdkRef.containerInstance.associateDialogRef(dialogRef!);
        }

        return dialogRef!;
    }

    /**
     * Gets an array of currently opened dialogs that were opened with this instance of service.
     */
    getDialogs(): MzDrawerRef<any>[] {
        return this.openDialogs;
    }

    confirmDeactivation(): boolean {
        // We assume all dialogs belong to the same component tree, so we can just check the first one/last opened
        const i = this.openDialogs.findLastIndex((ref) => !ref.canDeactivate());

        if (i > -1) {
            return this.openDialogs[i].confirmDeactivation();
        }

        return true;
    }

    closeAll(): void {
        this.closeDialogs(this.openDialogs);
    }

    ngOnDestroy(): void {
        this.closeDialogs(this.openDialogs);
    }

    private closeDialogs(dialogs: MzDrawerRef<any>[]) {
        let i = dialogs.length;

        while (i--) {
            dialogs[i].close();
        }
    }
}
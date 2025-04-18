import { AutoFocusTarget, Dialog, DialogCloseOptions, DialogConfig, DialogRef, DialogRole } from '@angular/cdk/dialog';
import { ComponentType, Overlay, PositionStrategy, ScrollStrategy } from '@angular/cdk/overlay';
import { Inject, Injectable, Injector, OnDestroy, Optional, TemplateRef, Type, ViewContainerRef } from '@angular/core';
import { Observable, filter, merge, take } from 'rxjs';
import { Direction } from '@angular/cdk/bidi';
import { BasePortalOutlet } from '@angular/cdk/portal';
import { CanDeactivateComponent, hasImplementation } from '../guard-deactivate';
import { DEFAULT_MZ_DIALOG_CONFIG, MZ_DIALOG_DATA } from './dialog-injectors';
import { DrawerContainerComponent } from './container/drawer-container.component';

@Injectable({
    providedIn: 'root',
})
export class MzDialog implements OnDestroy {
    private cdkDialog: Dialog;
    private openDialogs: MzDialogRef<any>[] = [];
    //private viewContainerRef?: ViewContainerRef | null = null;
    static counter = 0;
    readonly myCounter;

    constructor(private injector: Injector, private overlay: Overlay, @Optional() @Inject(DEFAULT_MZ_DIALOG_CONFIG) private configuredOptions: MzDialogConfig, @Optional() private viewContainerRef?: ViewContainerRef | null) {
        this.cdkDialog = injector.get(Dialog);
        //this.viewContainerRef = injector.get(ViewContainerRef,null);

        MzDialog.counter++;
        this.myCounter = MzDialog.counter;
        console.log('------------mzdialog constructor:', this.myCounter, injector, this.viewContainerRef);
    }

    /**
     * Opens a modal dialog containing the given component.
     * @param component Type of the component to load into the dialog.
     * @param config Extra configuration options.
     * @returns Reference to the newly-opened dialog.
     */
    open<R = any, D = any, T = any>(component: ComponentType<T>, config?: MzDialogConfig<D>): MzDialogRef<R, T>;
    /**
     * Opens a modal dialog containing the given template.
     * @param template TemplateRef to instantiate as the dialog content.
     * @param config Extra configuration options.
     * @returns Reference to the newly-opened dialog.
     */
    open<R = any, D = any, T = any>(template: TemplateRef<T>, config?: MzDialogConfig<D>): MzDialogRef<R, T>;
    open<R = any, D = any, T = any>(componentOrTemplateRef: ComponentType<T> | TemplateRef<T>, config?: MzDialogConfig<D>): MzDialogRef<R, T>;
    open<R = any, D = any, T = any>(componentOrTemplateRef: ComponentType<T> | TemplateRef<T>, config?: MzDialogConfig<D>): MzDialogRef<R, T> {
        //this.viewContainerRef = this.injector.get(ViewContainerRef, null);

        const defaultOptions = new MzDialogConfig<D>();
        const options = { ...(this.configuredOptions || defaultOptions), ...config };

        // compute closeOnNavigation if left undefined. dialogs need to be destroyed either via navigation or component destruction
        if (options.closeOnNavigation === undefined) {
            options.closeOnNavigation = options.viewContainerRef === undefined && !this.viewContainerRef;
        }

        console.log('opening dialog', this.myCounter, this.openDialogs.length, this.viewContainerRef, options.closeOnNavigation);

        let dialogRef: MzDialogRef<R, T>;
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
                type: options.container || DrawerContainerComponent,
                providers: () => [
                    { provide: MzDialogConfig, useValue: options },
                    { provide: DialogConfig, useValue: options },
                ],
            },
            templateContext: () => ({ dialogRef }),
            providers: (ref, cdkConfig, dialogContainer) => {
                dialogRef = new MzDialogRef(ref, options, dialogContainer);
                return [
                    { provide: MZ_DIALOG_DATA, useValue: cdkConfig.data },
                    { provide: MzDialogRef, useValue: dialogRef },
                ];
            },
        });
        this.openDialogs.push(dialogRef!);
        dialogRef!.closed.pipe(take(1)).subscribe(() => {
            const i = this.openDialogs.indexOf(dialogRef);
            this.openDialogs.splice(i, 1);
        });

        if (cdkRef.containerInstance instanceof DrawerContainerComponent) {
            cdkRef.containerInstance.enter();
            cdkRef.containerInstance.associateDialogRef(dialogRef!);
        }

        console.log('viewContainerRef', cdkRef.config.viewContainerRef);
        return dialogRef!;
    }

    /**
     * Gets an array of currently opened dialogs that were opened with this instance of service.
     */
    getDialogs(): MzDialogRef<any>[] {
        console.log('getting open dialogs', this.myCounter, this.openDialogs.length);
        return this.openDialogs;
    }

    confirmDeactivation(): boolean {
        console.log('confirmDeactivation', this.myCounter, this.openDialogs.length);

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
        console.log('destroying open dialogs', this.myCounter, this.openDialogs.length);
        this.closeDialogs(this.openDialogs);
    }

    private closeDialogs(dialogs: MzDialogRef<any>[]) {
        let i = dialogs.length;

        while (i--) {
            dialogs[i].close();
        }
    }
}

/**
 * Configuration opening a modal dialog with the MzDialog service. Properties here are exposes what's available in @angular/cdk DialogConfig
 * and with a few additional properties for MzDialog.
 * See https://material.angular.io/cdk/dialog/api#DialogConfig
 */
export class MzDialogConfig<D = any, C extends BasePortalOutlet = BasePortalOutlet> {
    size?: 'sm' | 'md' | 'lg' | 'xl' = 'md';

    /**
     * Where the attached component should live in Angular's *logical* component tree.
     * This affects what is available for injection and the change detection order for the
     * component instantiated inside of the dialog. This does not affect where the dialog
     * content will be rendered.
     */
    viewContainerRef?: ViewContainerRef;

    /**
     * Injector used for the instantiation of the component to be attached. If provided,
     * takes precedence over the injector indirectly provided by `ViewContainerRef`.
     */
    injector?: Injector;

    /** ID for the dialog. If omitted, a unique one will be generated. */
    id?: string;

    /** The ARIA role of the dialog element. */
    role?: DialogRole = 'dialog';

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

    /** Strategy to use when positioning the dialog. Defaults to centering it on the page. */
    positionStrategy?: PositionStrategy;

    /** Data being injected into the child component. */
    data?: D | null = null;

    /** Layout direction for the dialog's content. */
    direction?: Direction;

    /** ID of the element that describes the dialog. */
    ariaDescribedBy?: string | null = null;

    /** ID of the element that labels the dialog. */
    ariaLabelledBy?: string | null = null;

    /** Dialog label applied via `aria-label` */
    ariaLabel?: string | null = null;

    /** Whether this is a modal dialog. Used to set the `aria-modal` attribute. */
    ariaModal?: boolean = true;

    /**
     * Where the dialog should focus on open.
     * @breaking-change 14.0.0 Remove boolean option from autoFocus. Use string or
     * AutoFocusTarget instead.
     */
    autoFocus?: AutoFocusTarget | string | boolean = 'first-tabbable';

    /**
     * Whether the dialog should restore focus to the previously-focused element upon closing.
     * Has the following behavior based on the type that is passed in:
     * - `boolean` - when true, will return focus to the element that was focused before the dialog
     *    was opened, otherwise won't restore focus at all.
     * - `string` - focus will be restored to the first element that matches the CSS selector.
     * - `HTMLElement` - focus will be restored to the specific element.
     */
    restoreFocus?: boolean | string | HTMLElement = true;

    /**
     * Scroll strategy to be used for the dialog. This determines how
     * the dialog responds to scrolling underneath the panel element.
     */
    scrollStrategy?: ScrollStrategy;

    /**
     * Whether the dialog should close when the user goes backwards/forwards in history.
     */
    closeOnNavigation?: boolean = true;

    /**
     * Component into which the dialog content will be rendered. Defaults to `CdkDialogContainer`.
     * A configuration object can be passed in to customize the providers that will be exposed
     * to the dialog container.
     */
    container?: Type<C>;
}

export class MzDialogRef<R, C = any> {
    /** Whether the user is allowed to close the dialog. */
    readonly disableClose: boolean | undefined;
    readonly id: string;

    constructor(readonly cdkRef: DialogRef<R, C>, readonly config: MzDialogConfig, readonly containerInstance: BasePortalOutlet) {
        this.disableClose = config.disableClose;
        this.id = cdkRef.id;
        merge(this.cdkRef.backdropClick, this.cdkRef.keydownEvents.pipe(filter((event) => !this.disableClose && event.code === 'Escape' && !event.getModifierState(event.key)))).subscribe((event) => {
            if (!this.disableClose) {
                event.preventDefault();
                this.tryClose(undefined, { focusOrigin: event.type === 'keydown' ? 'keyboard' : 'mouse' });
            }
        });
    }

    get componentInstance(): C | null {
        return this.cdkRef.componentInstance;
    }

    get closed(): Observable<R | undefined> {
        return this.cdkRef.closed;
    }

    /**
     * Confirms the component's deactivation then closes the dialog.
     * @param result
     * @param options
     * @returns
     */
    tryClose(result?: R, options?: DialogCloseOptions): boolean {
        if (this.confirmDeactivation()) {
            this.cdkRef.close(result, options);
            return true;
        }

        return false;
    }

    /**
     * Closes the dialog without confirmation.
     * @param result
     * @param options
     */
    close(result?: R, options?: DialogCloseOptions): void {
        this.cdkRef.close(result, options);
    }

    confirmDeactivation(): boolean {
        if (hasImplementation<CanDeactivateComponent>(this.cdkRef.componentInstance, 'canDeactivate')) {
            return this.cdkRef.componentInstance.canDeactivate() || this.cdkRef.componentInstance.confirmDeactivation();
        }

        return true;
    }

    canDeactivate(): boolean {
        if (hasImplementation<CanDeactivateComponent>(this.cdkRef.componentInstance, 'canDeactivate')) {
            return this.cdkRef.componentInstance.canDeactivate();
        }

        return true;
    }
}

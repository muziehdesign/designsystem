import { DialogCloseOptions, DialogRef } from "@angular/cdk/dialog";
import { MzDialogConfig } from "./dialog-config";
import { BasePortalOutlet } from "@angular/cdk/portal";
import { Observable, filter, merge } from "rxjs";
import { CanDeactivateComponent, hasImplementation } from "../guard-deactivate";

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
        if (this.canDeactivate() || this.confirmDeactivation()) {
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
        if (hasImplementation<CanDeactivateComponent>(this.cdkRef.componentInstance, 'canDeactivate') && !this.cdkRef.componentInstance.canDeactivate()) {
            return this.cdkRef.componentInstance.confirmDeactivation();
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

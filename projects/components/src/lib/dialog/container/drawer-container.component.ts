import { CdkDialogContainer } from '@angular/cdk/dialog';
import { CdkPortalOutlet } from '@angular/cdk/portal';
import { Component, ElementRef, HostListener, Inject, NgZone, Optional } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { OverlayRef } from '@angular/cdk/overlay';
import { FocusTrapFactory, InteractivityChecker } from '@angular/cdk/a11y';
import { MzDialogConfig, MzDialogRef } from '../mz-dialog.service';

@Component({
    selector: 'mz-drawer-container',
    standalone: true,
    imports: [CdkPortalOutlet],
    templateUrl: './drawer-container.component.html',
    styleUrl: './drawer-container.component.scss',
    host: {
        'class': 'mz-dialog-container',
        '[class.open]': 'open'
    }
})
export class DrawerContainerComponent extends CdkDialogContainer<MzDialogConfig> {

    private dialogRef?: MzDialogRef<any>;
    protected open = false;

    constructor(private elementRef: ElementRef, private focusTrapFactory: FocusTrapFactory, @Optional() @Inject(DOCUMENT) _document: any, readonly dialogConfig: MzDialogConfig, protected interactivityChecker: InteractivityChecker, protected ngZone: NgZone, protected overlayRef: OverlayRef) {
        super(elementRef, focusTrapFactory, _document, dialogConfig, interactivityChecker, ngZone, overlayRef);
    }

    associateDialogRef(dialogRef: MzDialogRef<any>): void {
        this.dialogRef = dialogRef;
    }

    protected tryClose(e: UIEvent): void {
        this.dialogRef?.tryClose(undefined, { focusOrigin: e.detail === 0 ? 'keyboard' : 'mouse' });
    }

    @HostListener('window:beforeunload', ['$event'])
    onBeforeUnload(event: BeforeUnloadEvent) {
        if (!this.dialogRef?.confirmDeactivation()) {
            event.preventDefault();
            event.returnValue = '';
        }
    }

    /**
     * Marks state of container for animation purposes.
     */
    enter() {
        this.open = true;
    }
}

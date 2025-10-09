import { CdkDialogContainer } from '@angular/cdk/dialog';
import { CdkPortalOutlet } from '@angular/cdk/portal';
import { Component, ElementRef, HostListener, Inject, NgZone, Optional, ViewEncapsulation, DOCUMENT } from '@angular/core';

import { OverlayRef } from '@angular/cdk/overlay';
import { FocusTrapFactory, InteractivityChecker } from '@angular/cdk/a11y';
import { MzDrawerConfig } from '../drawer-config';
import { MzDrawerRef } from '../drawer-ref';

@Component({
    selector: 'mz-drawer-container',
    imports: [CdkPortalOutlet],
    templateUrl: './drawer-container.component.html',
    styleUrl: './drawer-container.component.scss',
    encapsulation: ViewEncapsulation.None,
    host: {
        'class': 'mz-drawer-container'
    }
})
export class MzDrawerContainer extends CdkDialogContainer<MzDrawerConfig> {

    private dialogRef?: MzDrawerRef<any>;
    protected open = false;

    constructor(private elementRef: ElementRef, focusTrapFactory: FocusTrapFactory, readonly dialogConfig: MzDrawerConfig, protected interactivityChecker: InteractivityChecker, protected ngZone: NgZone, protected overlayRef: OverlayRef, @Optional() @Inject(DOCUMENT) _document: any) {
        super(elementRef, focusTrapFactory, _document, dialogConfig, interactivityChecker, ngZone, overlayRef);
    }

    associateDialogRef(dialogRef: MzDrawerRef<any>): void {
        this.dialogRef = dialogRef;
    }

    @HostListener('window:beforeunload', ['$event'])
    onBeforeUnload(event: BeforeUnloadEvent) {
        if (!this.dialogRef?.confirmDeactivation()) {
            event.preventDefault();
            event.returnValue = '';
        }
    }

    protected override _contentAttached(): void {
        super._contentAttached();
        const element = this.elementRef.nativeElement as HTMLElement;

        // for styling purposes
        element.firstElementChild?.classList.add('mz-drawer-component');

        // for animation purposes
        element.classList.add('open');
    }
}

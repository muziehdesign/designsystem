import { CdkDialogContainer, DialogConfig } from '@angular/cdk/dialog';
import { Component, ElementRef, Inject, NgZone, Optional, ViewEncapsulation } from '@angular/core';
import { FocusTrapFactory, InteractivityChecker } from '@angular/cdk/a11y';
import { OverlayRef } from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';
import { CdkPortalOutlet } from '@angular/cdk/portal';

@Component({
    selector: 'mz-dialog-container',
    imports: [CdkPortalOutlet],
    templateUrl: './dialog-container.component.html',
    styleUrl: './dialog-container.component.scss',
    encapsulation: ViewEncapsulation.None,
    host: {
        class: 'mz-dialog-container',
    },
})
export class MzDialogContainer extends CdkDialogContainer<DialogConfig> {
    constructor(private elementRef: ElementRef, focusTrapFactory: FocusTrapFactory, readonly dialogConfig: DialogConfig, protected interactivityChecker: InteractivityChecker, protected ngZone: NgZone, protected overlayRef: OverlayRef, @Optional() @Inject(DOCUMENT) _document: any) {
        super(elementRef, focusTrapFactory, _document, dialogConfig, interactivityChecker, ngZone, overlayRef);
    }

    protected override _contentAttached(): void {
        super._contentAttached();
        this.enter();
    }

    private enter() {
        const html = this.elementRef.nativeElement as HTMLElement;
        html.classList.add('open');
    }
}

import { CdkDialogContainer, DialogConfig } from '@angular/cdk/dialog';
import { Component, ElementRef, Inject, NgZone, Optional } from '@angular/core';
import { FocusTrapFactory, InteractivityChecker } from '@angular/cdk/a11y';
import { OverlayRef } from '@angular/cdk/overlay';
import { DOCUMENT } from '@angular/common';
import { CdkPortalOutlet } from '@angular/cdk/portal';
import { SvgIconComponent } from '../../svg-icon/svg-icon.component';

@Component({
  selector: 'mz-modal-container',
  imports: [CdkPortalOutlet, SvgIconComponent],
  templateUrl: './modal-container.component.html',
  styleUrl: './modal-container.component.scss',
  host: {
    'class': 'mz-dialog-container mz-modal'
  }
})
export class MzModalContainer extends CdkDialogContainer<DialogConfig> {
    constructor(elementRef: ElementRef, focusTrapFactory: FocusTrapFactory, readonly dialogConfig: DialogConfig, protected interactivityChecker: InteractivityChecker, protected ngZone: NgZone, protected overlayRef: OverlayRef, @Optional() @Inject(DOCUMENT) _document: any) {
        super(elementRef, focusTrapFactory, _document, dialogConfig, interactivityChecker, ngZone, overlayRef);
    }
}

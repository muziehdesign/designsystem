import { CdkTrapFocus } from '@angular/cdk/a11y';
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'mz-dropdown',
    imports: [CdkOverlayOrigin, CdkConnectedOverlay, CdkTrapFocus],
    templateUrl: './dropdown.component.html',
    styleUrl: './dropdown.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class MzDropdownComponent {
    @Input() label: string = '';
    @Input() open = false;

    toggle() {
      this.open = !this.open;
    }

    collapse() {
        this.open = false;
    }
}

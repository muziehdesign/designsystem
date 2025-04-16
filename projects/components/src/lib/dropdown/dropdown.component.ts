import { CdkTrapFocus } from '@angular/cdk/a11y';
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'mz-dropdown',
    standalone: true,
    imports: [CdkOverlayOrigin, CdkConnectedOverlay, CdkTrapFocus],
    templateUrl: './dropdown.component.html',
    styleUrl: './dropdown.component.scss'
})
export class DropdownComponent {
    @Input() label: string = '';
    @Input() open = false;

    toggle() {
      this.open = !this.open;
    }

    collapse() {
        this.open = false;
    }
}

import { booleanAttribute, Component, ElementRef, HostBinding, HostListener, input, Input } from '@angular/core';
import { ButtonAppearance } from './button-appearance';

@Component({
    selector: 'button[mz-button], a[mz-button], button[mzButton], a[mzButton]',
    imports: [],
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss',
})
export class MzButton {
    appearance = input<ButtonAppearance>('secondary');
    busy = input(false);
    disabled = input(false, { transform: booleanAttribute });

    @HostBinding('class')
    get elementClass(): string {
        return ['button', `button-${this.appearance()}`, this.busy() ? 'busy' : ''].join(' ');
    }

    constructor(elementRef: ElementRef<HTMLElement>) {
        elementRef.nativeElement.addEventListener('click', (event) => {
            if (this.busy() || this.disabled()) {
                event.preventDefault();
                event.stopPropagation();
                event.stopImmediatePropagation();
                return;
            }
        });
    }
}

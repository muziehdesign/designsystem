import { booleanAttribute, Component, ElementRef, HostBinding, HostListener, input, Input } from '@angular/core';

@Component({
    selector: 'button[mzButton], a[mzButton]',
    imports: [],
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss',
})
export class MzButtonComponent {
    @Input() variant: 'primary' | 'secondary' | 'tertiary' = 'secondary';
    busy = input(false);
    disabled = input(false, { transform: booleanAttribute });

    @HostBinding('class')
    get elementClass(): string {
        return ['button', `button-${this.variant}`, this.busy() ? 'loading' : ''].join(' ');
    }

    constructor(elementRef: ElementRef<HTMLElement>) {
        elementRef.nativeElement.addEventListener('click', (event) => {
            if (this.busy() || this.disabled()) {
                console.log('should be stopped');
                event.preventDefault();
                event.stopPropagation();
                event.stopImmediatePropagation();
                return;
            }
        });
    }
}

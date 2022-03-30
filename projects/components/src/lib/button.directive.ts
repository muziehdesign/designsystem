import { Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
    selector: '[mzButton]',
    host: {
        role: 'button',
        '[attr.tabindex]': '0',
        '[attr.aria-disabled]': 'busy',
    },
})
export class ButtonDirective implements OnChanges {
    @Input()
    variant? = 'secondary';
    @Input()
    busy?: boolean;
    private loadingElement?: Node;

    constructor(private renderer: Renderer2, private hostElement: ElementRef) {}

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['busy'] && Boolean(changes['busy'].previousValue) !== Boolean(changes['busy'].currentValue)) {
            this.attachOrDeattachSpinner();
        }
    }

    @HostBinding('class')
    get elementClass(): string {
        return ['button', `button-${this.variant}`, this.busy ? 'loading' : ''].join(' ');
    }

    @HostListener('click', ['$event'])
    @HostListener('keydown', ['$event'])
    @HostListener('keypress', ['$event'])
    keyEvent(event: KeyboardEvent) {
        if (this.busy) {
            event.stopPropagation();
            event.preventDefault();
            event.stopImmediatePropagation();
            return;
        }
    }

    attachOrDeattachSpinner() {
        if (this.busy) {
            this.loadingElement = this.renderer.createElement('div') as Node;
            const innerSpinner = this.renderer.createElement('div');
            this.renderer.addClass(this.loadingElement, 'button-loading-overlay');
            this.renderer.addClass(innerSpinner, 'spinner');
            this.renderer.appendChild(this.loadingElement, innerSpinner);
            this.renderer.appendChild(this.hostElement.nativeElement, this.loadingElement);
        } else {
            this.renderer.removeChild(this.hostElement.nativeElement, this.loadingElement);
        }
    }
}

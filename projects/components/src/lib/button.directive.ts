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
    private svgContent = `
    <svg class="animate-spin m-auto h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none"
        viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
        </circle>
        <path class="opacity-75" fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
        </path>
    </svg>
    `;

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
            innerSpinner.innerHTML = this.svgContent;
            this.renderer.addClass(this.loadingElement, 'button-loading-overlay');
            this.renderer.appendChild(this.loadingElement, innerSpinner);
            this.renderer.appendChild(this.hostElement.nativeElement, this.loadingElement);
        } else {
            this.renderer.removeChild(this.hostElement.nativeElement, this.loadingElement);
        }
    }
}

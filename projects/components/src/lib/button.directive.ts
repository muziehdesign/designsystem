import { Directive, ElementRef, HostBinding, Input, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Directive({
    selector: '[mzButton]',
    host: {
        role: 'button',
        '[attr.tabindex]': '0',
        '[attr.aria-disabled]': 'busy',
    },
})
export class ButtonDirective implements OnInit, OnChanges, OnDestroy {
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
    private subscription = new Subscription();

    constructor(private renderer: Renderer2, private hostElement: ElementRef) {}

    ngOnInit(): void {
        const el = this.hostElement.nativeElement;
        this.subscription = fromEvent(el.parentNode, 'click', { capture: true }).subscribe((e: any) => {
            if (this.busy && (e.target === el || e.target === this.loadingElement)) {
                e.stopPropagation();
            }
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['busy'] && Boolean(changes['busy'].previousValue) !== Boolean(changes['busy'].currentValue)) {
            this.attachOrDeattachSpinner();
        }
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    @HostBinding('class')
    get elementClass(): string {
        return ['button', `button-${this.variant}`, this.busy ? 'loading' : ''].join(' ');
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

import { Directive, ElementRef, HostBinding, Input, OnChanges, OnDestroy, Renderer2, SimpleChanges } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Directive({
    selector: '[mzButton]',
    standalone: true,
    host: {
        role: 'button',
        '[attr.tabindex]': '0',
        '[attr.aria-disabled]': 'busy',
    },
})
export class ButtonDirective implements OnChanges, OnDestroy {
    @Input()
    variant? = 'secondary';
    @Input()
    busy?: boolean = false;
    private svgContent = `
    <svg class="button-loading-spinner" xmlns="http://www.w3.org/2000/svg" fill="none"
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

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['busy'] && Boolean(changes['busy'].previousValue) !== Boolean(changes['busy'].currentValue)) {
            this.attachOrDeattachSpinner();
        }
    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }

    @HostBinding('class')
    get elementClass(): string {
        return ['button', `button-${this.variant}`, this.busy ? 'loading' : ''].join(' ');
    }

    attachOrDeattachSpinner() {
        if (this.busy) {
            const loadingElement = this.renderer.createElement('div');
            loadingElement.innerHTML = this.svgContent;
            this.renderer.addClass(loadingElement, 'button-loading-overlay');
            this.renderer.appendChild(this.hostElement.nativeElement, loadingElement);
            this.addEventSubscription();
        } else {
            this.renderer.removeChild(this.hostElement.nativeElement, this.getOverlayDiv());
            this.subscription?.unsubscribe();
        }
    }

    private addEventSubscription() {
        const el = this.hostElement.nativeElement;
        this.subscription = fromEvent(el.parentNode, 'click', { capture: true })
            .pipe(filter((e: any) => Boolean(this.busy && this.getElementsToVerify().includes(e.target))))
            .subscribe((e: any) => {
                e.stopPropagation();
            });
    }

    private getChildElement(query: string) {
        return this.hostElement.nativeElement.querySelector(query);
    }

    private getElementsToVerify() {
        return [this.hostElement.nativeElement, this.getOverlayDiv(), this.getChildElement('.button-loading-overlay'), this.getChildElement('.button-loading-overlay svg'), this.getChildElement('.button-loading-overlay svg circle'), this.getChildElement('.button-loading-overlay svg path')];
    }

    private getOverlayDiv() {
        return this.getChildElement('.button-loading-overlay');
    }
}

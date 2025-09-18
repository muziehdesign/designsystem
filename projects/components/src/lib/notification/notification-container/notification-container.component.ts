import { Component, ComponentRef, ElementRef, EmbeddedViewRef, OnDestroy, ViewChild } from '@angular/core';
import { BasePortalOutlet, CdkPortalOutlet, ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { MzNotificationConfig } from '../notification-config';

const ANIMATION_CLASS_OPENING = 'opening';
const ANIMATION_CLASS_CLOSING = 'closing';

@Component({
    selector: 'mz-notification-container',
    imports: [CdkPortalOutlet],
    templateUrl: './notification-container.component.html',
    styleUrl: './notification-container.component.scss',
})
export class MzNotificationContainer extends BasePortalOutlet implements OnDestroy {
    
    @ViewChild(CdkPortalOutlet, { static: true }) private portalOutlet!: CdkPortalOutlet;

    constructor(private elementRef: ElementRef) {
        super();
    }

    attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T> {
        const result = this.portalOutlet.attachComponentPortal(portal);
        return result;
    }

    attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C> {
        const result = this.portalOutlet.attachTemplatePortal(portal);
        return result;
    }

    enter() {
        const element = this.elementRef.nativeElement as HTMLElement;
        element.classList.add(ANIMATION_CLASS_OPENING);
    }

    exit() {
        const element = this.elementRef.nativeElement as HTMLElement;
        element.classList.remove(ANIMATION_CLASS_OPENING);
        element.classList.add(ANIMATION_CLASS_CLOSING);
    }

    ngOnDestroy(): void {
        // TODO: ensure to exit animation
    }
}

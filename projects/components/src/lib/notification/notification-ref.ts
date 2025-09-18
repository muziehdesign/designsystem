import { OverlayRef } from '@angular/cdk/overlay';
import { MzNotificationContainer } from './notification-container/notification-container.component';
import { Observable } from 'rxjs';

export class MzNotificationRef<T> {
    /** The instance of the component making up the content of the notification. */
    instance!: T;

    /**
     * The instance of the component making up the content of the notification.
     */
    readonly containerInstance: MzNotificationContainer;

    constructor(containerInstance: MzNotificationContainer, private readonly overlayRef: OverlayRef) {
        this.containerInstance = containerInstance;
    }

    dismiss(): void {
        this.containerInstance.exit();
        this.overlayRef.dispose();
    }
}

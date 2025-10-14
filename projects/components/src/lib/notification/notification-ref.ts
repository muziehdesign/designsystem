import { OverlayRef } from '@angular/cdk/overlay';
import { MzNotificationContainer } from './notification-container/notification-container.component';
import { Observable, Subject } from 'rxjs';

export class MzNotificationRef<T> {
    /** The instance of the component making up the content of the notification. */
    instance!: T;

    /**
     * The instance of the component making up the content of the notification.
     */
    readonly containerInstance: MzNotificationContainer;

    private dismissedByAction = false;
    private readonly afterDismissedSubject = new Subject<MzNotificationDismiss>();
    private readonly onActionSubject = new Subject<void>();
    private durationTimeoutId: ReturnType<typeof setTimeout> | undefined;

    constructor(containerInstance: MzNotificationContainer, private readonly overlayRef: OverlayRef) {
        this.containerInstance = containerInstance;
    }

    dismiss(): void {
        clearTimeout(this.durationTimeoutId);
        this.containerInstance.exit();
        this.overlayRef.dispose();
        if (!this.onActionSubject.closed) {
            this.onActionSubject.complete();
        }
        this.afterDismissedSubject.next({ dismissedByAction: this.dismissedByAction });
        this.afterDismissedSubject.complete();
    }

    dismissWithAction(): void {
        if (!this.onActionSubject.closed) {
            this.dismissedByAction = true;
            this.onActionSubject.next();
            this.onActionSubject.complete();
            this.dismiss();
        }
        clearTimeout(this.durationTimeoutId);
    }

    dismissAfter(duration: number): void {
        this.durationTimeoutId = setTimeout(() => this.dismiss(), duration);
    }

    afterDismissed(): Observable<MzNotificationDismiss> {
        return this.afterDismissedSubject.asObservable();
    }

    onAction(): Observable<void> {
        return this.onActionSubject.asObservable();
    }
}

export interface MzNotificationDismiss {
    dismissedByAction: boolean;
}

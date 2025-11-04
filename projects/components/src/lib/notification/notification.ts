import { ComponentRef, Inject, Injectable, Injector, Optional } from '@angular/core';
import { MZ_NOTIFICATION_DATA, MzNotificationConfig } from './notification-config';
import { ComponentType, GlobalPositionStrategy, Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { MzNotificationContainer } from './notification-container/notification-container.component';
import { MzNotificationRef } from './notification-ref';
import { MzSimpleNotification } from './simple-notification/simple-notification.component';
import { SimpleNotificationData } from './simple-notification/simple-notification-data';

@Injectable({
    providedIn: 'root',
})
export class MzNotification {
    private currentNotificationRef: MzNotificationRef<any> | null = null;
    constructor(private injector: Injector, private overlay: Overlay, @Optional() @Inject(MZ_NOTIFICATION_DATA) private defaultConfig?: MzNotificationConfig) {}

    open(message: string, action: string = '', config?: MzNotificationConfig) {
        const data: SimpleNotificationData = { message, action };
        return this.openFromComponent(MzSimpleNotification, { ...config, data, horizontalPosition: 'center', verticalPosition: 'bottom' });
    }

    openFromComponent<T>(component: ComponentType<T>, config?: MzNotificationConfig) {
        const options = { ...new MzNotificationConfig(), ...this.defaultConfig, ...config };
        const overlayRef = this.createOverlay(options);
        const container = this.attachContainer(overlayRef, options);
        const ref = new MzNotificationRef<T>(container, overlayRef);

        const injector = this.createInjector(options, ref);
        const portal = new ComponentPortal(component, undefined, injector);
        const contentRef = container.attachComponentPortal(portal);
        ref.instance = contentRef.instance;

        this.animateNotification(ref, options);
        this.currentNotificationRef = ref;
        return ref;
    }

    private animateNotification(notificationRef: MzNotificationRef<any>, config: MzNotificationConfig) {
        notificationRef.afterDismissed().subscribe(() => {
            if (this.currentNotificationRef === notificationRef) {
                this.currentNotificationRef = null;
            }
        });

        if (this.currentNotificationRef) {
            this.currentNotificationRef.afterDismissed().subscribe(() => {
                notificationRef.containerInstance.enter();
            });
            this.currentNotificationRef.dismiss();
        } else {
            notificationRef.containerInstance.enter();
        }

        if(config.duration && config.duration > 0) {
            notificationRef.dismissAfter(config.duration);
        }
    }

    private createOverlay(config: MzNotificationConfig) {
        const positionStrategy = new GlobalPositionStrategy();
        if (config.horizontalPosition === 'start') {
            positionStrategy.left('0');
        } else if (config.horizontalPosition === 'end') {
            positionStrategy.right('0');
        } else {
            positionStrategy.centerHorizontally();
        }
        if (config.verticalPosition === 'top') {
            positionStrategy.top('0');
        } else if (config.verticalPosition === 'bottom') {
            positionStrategy.bottom('0');
        }

        const overlayConfig = new OverlayConfig();
        overlayConfig.positionStrategy = positionStrategy;
        return this.overlay.create(overlayConfig);
    }

    private attachContainer(overlayRef: OverlayRef, config: MzNotificationConfig) {
        const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        const injector = Injector.create({
            parent: userInjector || this.injector,
            providers: [{ provide: MzNotificationConfig, useValue: config }],
        });

        const containerPortal = new ComponentPortal(MzNotificationContainer, config.viewContainerRef, injector);
        const containerRef: ComponentRef<MzNotificationContainer> = overlayRef.attach(containerPortal);
        //containerRef.instance.config = config;
        return containerRef.instance;
    }

    private createInjector<T>(config: MzNotificationConfig, notificationRef: MzNotificationRef<T>): Injector {
        const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
        const injector = Injector.create({
            parent: userInjector || this.injector,
            providers: [
                { provide: MzNotificationRef, useValue: notificationRef },
                { provide: MZ_NOTIFICATION_DATA, useValue: config.data },
            ],
        });
        return injector;
    }
}

import { Injectable, Injector } from "@angular/core";
import { MzNotificationConfig } from "./notification-config";
import { ComponentType, Overlay, OverlayConfig, OverlayRef } from "@angular/cdk/overlay";

@Injectable({
    providedIn: 'root',
})
export class MzNotification {

    constructor(private injector: Injector, private overlay: Overlay) { }

    open(message: string, action: string = '', config? : MzNotificationConfig) {
        const options = { ...new MzNotificationConfig(), ...config };
        const overlayRef = this.createOverlay(options);
    }

    openFromComponent<T>(component: ComponentType<T>, config?: MzNotificationConfig) {
        
    }

    private createOverlay(config: MzNotificationConfig) {
        const positionStrategy = this.overlay.position().global();
        if(config.horizontalPosition === 'start') {
            positionStrategy.left('0');
        } else if(config.horizontalPosition === 'end') {
            positionStrategy.right('0');
        }
        if(config.verticalPosition === 'top') {
            positionStrategy.top('0');
        } else if(config.verticalPosition === 'bottom') {
            positionStrategy.bottom('0');
        }

        const overlayConfig = new OverlayConfig();
        overlayConfig.positionStrategy = positionStrategy;
        return this.overlay.create(overlayConfig);        
    }

    private attachContainer(overlayRef: OverlayRef, config: MzNotificationConfig) {
        
    }
}
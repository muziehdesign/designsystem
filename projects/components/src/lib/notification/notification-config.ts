import { InjectionToken, ViewContainerRef } from "@angular/core";

export class MzNotificationConfig<D=any> { 
    viewContainerRef?: ViewContainerRef;
     /** The length of time in milliseconds to wait before automatically dismissing the notification. */
    duration?: number = 0;
    data?: D | null = null;
    horizontalPosition?: 'start' | 'center' | 'end' = 'center';
    verticalPosition?: 'top' | 'bottom' = 'bottom';
}

export const MZ_NOTIFICATION_DATA = new InjectionToken<any>('MzNotificationData');

export class MzNotificationConfig<D=any> {
    duration?: number = 0;
    data?: D | null = null;
    horizontalPosition: 'start' | 'center' | 'end' = 'center';
    verticalPosition: 'top' | 'bottom' = 'bottom';
}

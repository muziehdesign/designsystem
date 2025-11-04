import { Component } from '@angular/core';
import { MzNotification } from '@muziehdesign/components';

@Component({
    selector: 'app-notification',
    imports: [],
    templateUrl: './notification.component.html',
    styleUrl: './notification.component.scss',
})
export class NotificationComponent {
    constructor(private notification: MzNotification) {}

    open() {
        this.notification.open('Hello world');
    }

    openWithDuration() {
        this.notification.open('Hello world', 'Undo', { duration: 5000 });
    }
    openWithAction() {
        this.notification.open('Hello world', 'Close');
    }
}

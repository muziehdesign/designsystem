import { Component, Inject } from '@angular/core';
import { SimpleNotificationData } from './simple-notification-data';
import { MZ_NOTIFICATION_DATA } from '../notification-config';
import { MzNotificationRef } from '../notification-ref';
import { MzButton } from '../../button/button.component';
import { SvgIconComponent } from '../../svg-icon/svg-icon.component';

@Component({
  selector: 'mz-simple-notification',
  imports: [MzButton, SvgIconComponent],
  templateUrl: './simple-notification.component.html',
  styleUrl: './simple-notification.component.scss'
})
export class MzSimpleNotification {
  
  constructor(@Inject(MZ_NOTIFICATION_DATA) protected data: SimpleNotificationData, private ref: MzNotificationRef<any>) {

  }

  action() {
    this.ref.dismiss();
  }
}

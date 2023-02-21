import { Component } from '@angular/core';
import { InlineMessageService } from '../inline-message.service';

@Component({
    selector: 'mz-inline-message-title',
    templateUrl: './inline-message-title.component.html',
    styleUrls: ['./inline-message-title.component.scss'],
})
export class InlineMessageTitleComponent {

    constructor(
        private service: InlineMessageService
    ) {}
  
    open() {
      this.service.open();
    }
  
}

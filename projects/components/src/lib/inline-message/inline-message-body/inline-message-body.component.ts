import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InlineMessageService } from '../inline-message.service';

@Component({
    selector: 'mz-inline-message-body',
    templateUrl: './inline-message-body.component.html',
    styleUrls: ['./inline-message-body.component.scss'],
})
export class InlineMessageBodyComponent implements OnInit {
    display$: Observable<'open' | 'close'> | undefined;
  
    constructor(
        private inlineMessage: InlineMessageService
    ) {}
  
    ngOnInit() {
      this.display$ = this.inlineMessage.watch();
    }
  
    close() {
      this.inlineMessage.close();
    }
  }
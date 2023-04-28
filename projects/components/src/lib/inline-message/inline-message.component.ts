import { Component, Input, TemplateRef } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { InlineMessageDialogComponent } from './inline-message-dialog/inline-message-dialog.component';

@Component({
    selector: 'mz-inline-message',
    templateUrl: './inline-message.component.html',
    styleUrls: ['./inline-message.component.scss'],
})
export class InlineMessageComponent {
  @Input() title: TemplateRef<any> | undefined | null;
  @Input() body: TemplateRef<any> | undefined | null;

    constructor(public dialog: Dialog) {}

    ngOnInit(): void {}

    openDialog() {
        this.dialog.open(InlineMessageDialogComponent, {
          minWidth: '300px',
          data: {
            body: this.body,
          },
        });
      }
}

import { Component, Input, TemplateRef } from '@angular/core';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { InlineMessageDialogComponent } from './inline-message-dialog/inline-message-dialog.component';
import { CommonModule } from '@angular/common';
import { MatCommonModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'mz-inline-message',
    templateUrl: './inline-message.component.html',
    styleUrls: ['./inline-message.component.scss'],
    imports: [MatCommonModule, CommonModule, RouterModule, DialogModule],
    standalone: true,
})
export class InlineMessageComponent {
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

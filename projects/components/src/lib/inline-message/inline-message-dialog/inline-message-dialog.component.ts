import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
    selector: 'mz-inline-message-dialog',
    templateUrl: './inline-message-dialog.component.html',
    styleUrls: ['./inline-message-dialog.component.scss'],
})
export class InlineMessageDialogComponent implements OnInit {
    body: string = '';

    constructor(@Inject(DIALOG_DATA) public data: any) { }

    ngOnInit() {
        this.body = this.data.body;
    }

}
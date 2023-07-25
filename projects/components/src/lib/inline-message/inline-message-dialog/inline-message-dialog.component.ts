import { DialogModule, DIALOG_DATA } from '@angular/cdk/dialog';
import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit, TemplateRef } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'mz-inline-message-dialog',
    templateUrl: './inline-message-dialog.component.html',
    styleUrls: ['./inline-message-dialog.component.scss'],
    imports: [MatCommonModule, CommonModule, RouterModule, DialogModule],
    standalone: true,
})
export class InlineMessageDialogComponent implements OnInit {
    body: TemplateRef<any> | undefined | null;

    constructor(@Inject(DIALOG_DATA) public data: any) { }

    ngOnInit() {
        this.body = this.data.body;
    }

}
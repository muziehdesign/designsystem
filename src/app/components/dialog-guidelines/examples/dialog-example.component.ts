import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MzButton, MzDialog, MzDialogModule } from '@muziehdesign/components';

@Component({
    selector: 'app-modal-example',
    imports: [RouterLink, MzDialogModule, MzButton],
    template: `
        <mz-dialog-header title="Default dialog">
        </mz-dialog-header>
        <mz-dialog-content>
            <div>
                <label>
                    <input type="radio" name="contentLength" [value]="'short'" [checked]="contentLength === 'short'" (change)="useShortContent()" />
                    Short content
                </label>

                <label>
                    <input type="radio" name="contentLength" [value]="'long'" [checked]="contentLength === 'long'" (change)="useLongContent()" />
                    Long content
                </label>
            </div>
            @for(i of paragraphs; track $index) {
            <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad
                litora torquent per conubia nostra inceptos himenaeos.
            </p>
            }
            <div>
                <a [routerLink]="['/components']">Link</a>
            </div>
            <button mz-button (click)="openAnother()">Open another</button>
        </mz-dialog-content>
        <mz-dialog-footer>
            <button mz-button appearance="primary" (click)="close()">Done</button>
        </mz-dialog-footer>
    `,
})
export class DialogExampleComponent implements OnDestroy {
    contentLength: 'short' | 'long' = 'short';
    confirmOnClose = false;

    paragraphs = new Array(1);
    constructor(private modal: MzDialog, private dialogRef: DialogRef) {}

    useLongContent() {
        this.paragraphs = new Array(10);
    }

    useShortContent() {
        this.paragraphs = new Array(1);
    }

    openAnother() {
        this.modal.open(DialogExampleComponent);
    }

    close() {
        this.dialogRef.close();
    }

    ngOnDestroy(): void {
        console.log('ModalExampleComponent ngOnDestroy');
    }
}

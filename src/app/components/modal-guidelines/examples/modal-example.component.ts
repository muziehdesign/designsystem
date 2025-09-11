import { Component, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CanDeactivateComponent, MzModalService, MzModalModule } from '@muziehdesign/components';

@Component({
    selector: 'app-modal-example',
    imports: [RouterLink, MzModalModule],
    template: `
        <mz-modal-header title="Default modal">
            <h2>Default modal</h2>
        </mz-modal-header>
        <mz-modal-content>
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
            <div>
                <label class="field">
                    <input type="checkbox" class="form-checkbox" [checked]="confirmOnClose" (change)="confirmOnClose = !confirmOnClose" />
                    <span class="checkbox-label">Confirm on close</span>
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
            <button class="button button-secondary" (click)="openAnother()">Open another</button>
        </mz-modal-content>
        <mz-modal-footer>
            <button class="button button-primary">Done</button>
        </mz-modal-footer>
    `,
})
export class ModalExampleComponent implements OnDestroy, CanDeactivateComponent {
    contentLength: 'short' | 'long' = 'short';
    confirmOnClose = false;

    paragraphs = new Array(1);
    constructor(private modal: MzModalService) {}

    confirmDeactivation(): boolean {
        return window.confirm('Discard changes?');
    }

    canDeactivate(): boolean {
        console.log('canDeactivate', this.confirmOnClose);
        return this.confirmOnClose !== true;
    }

    useLongContent() {
        this.paragraphs = new Array(10);
    }

    useShortContent() {
        this.paragraphs = new Array(1);
    }

    openAnother() {
        this.modal.open(ModalExampleComponent);
    }

    ngOnDestroy(): void {
        console.log('ModalExampleComponent ngOnDestroy');
    }
}

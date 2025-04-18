import { Component, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CanDeactivateComponent, MzDialog, MzDialogModule } from 'muzieh-ngcomponents';

@Component({
    selector: 'app-drawer-example',
    standalone: true,
    imports: [RouterLink],
    host: {
        class: 'dialog-article',
    },
    template: `
        <header>
            <h2>Drawer Content</h2>
        </header>
        <div>
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
                    <input type="checkbox" class="form-checkbox" [checked]="confirmOnClose" (change)="confirmOnClose != confirmOnClose" />
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
            <button class="button button-secondary" (click)="alert()">Open alert dialog</button>
        </div>
        <footer>
            <button class="button button-primary">Done</button>
        </footer>
    `
})
export class DrawerExampleComponent implements OnDestroy, CanDeactivateComponent {

    contentLength : 'short' | 'long' = 'short';
    confirmOnClose = false;

    paragraphs = new Array(1);
    constructor(private mzDialog: MzDialog) {
        console.log('DrawerExampleComponent constructor', mzDialog.myCounter);
    }
    
    confirmDeactivation(): boolean {
        return window.confirm('Discard changes?');
    }

    canDeactivate(): boolean {
        return this.confirmOnClose;
    }

    useLongContent() {
        this.paragraphs = new Array(10);
    }

    useShortContent() {
        this.paragraphs = new Array(1);
    }

    alert() {
        this.mzDialog.open(DrawerExampleComponent);
    }

    ngOnDestroy(): void {
        console.log('DrawerExampleComponent ngOnDestroy');
    }
}

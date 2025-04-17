import { Component } from '@angular/core';

@Component({
    selector: 'app-drawer-example',
    standalone: true,
    host: {
        class: 'dialog-content',
    },
    template: `
        <header>
            <h2>Drawer Content</h2>
        </header>
        <div>
            <div>
                <label>
                    <input type="radio" name="paragraphs" [value]="'short'" [checked]="paragraphs.length === 1" (change)="useShortContent()" />
                    Short content
                </label>

                <label>
                    <input type="radio" name="paragraphs" [value]="'long'" [checked]="paragraphs.length > 1" (change)="useLongContent()" />
                    Long content
                </label>
            </div>
            @for(i of paragraphs; track $index) {
            <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad
                litora torquent per conubia nostra inceptos himenaeos.
            </p>
            }
        </div>
        <footer>
            <button class="button button-primary">Some button</button>
        </footer>
    `,
})
export class DrawerExampleComponent {
    paragraphs = new Array(1);

    useLongContent() {
        this.paragraphs = new Array(10);
    }

    useShortContent() {
        this.paragraphs = new Array(1);
    }
}

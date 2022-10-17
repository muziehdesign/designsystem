import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonDirective } from 'muzieh-ngcomponents';
@Component({
    selector: 'app-buttons-demo',
    standalone: true,
    imports: [CommonModule, ButtonDirective],
    templateUrl: './buttons-demo.component.html',
    styles: [
        `
            @import 'design/_button';
        `,
    ],
})
export class ButtonsDemoComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    ngAfterContentInit(): void {}
}

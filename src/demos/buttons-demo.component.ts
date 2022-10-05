import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
    selector: 'app-buttons-demo',
    standalone: true,
    imports: [CommonModule, SharedModule],
    template: `
        <div class="grid grid-cols-3 gap-4 max-w-2xl">
            <div>
              <button mzButton [variant]="'primary'">Primary button</button>
            </div>
            <div>
              <button mzButton [variant]="'secondary'">Secondary button</button>
            </div>
            <div>
              <button mzButton [variant]="'tertiary'">Tertiary button</button>
            </div>
        </div>
    `,
    styles: [],
})
export class ButtonsDemoComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}

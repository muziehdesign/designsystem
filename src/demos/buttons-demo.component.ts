import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonDirective } from '@muziehdesign/components';
@Component({
    selector: 'app-buttons-demo',
    imports: [CommonModule, ButtonDirective],
    templateUrl: './buttons-demo.component.html',
    styleUrls: ['./buttons-demo.component.scss']
})
export class ButtonsDemoComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    ngAfterContentInit(): void {}
}

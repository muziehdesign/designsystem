import { Component, Input, OnInit, Type, ViewContainerRef } from '@angular/core';

@Component({
    selector: 'app-demo-container',
    templateUrl: './demo-container.component.html',
    styleUrls: ['./demo-container.component.scss'],
})
export class DemoContainerComponent implements OnInit {
    @Input() component!: Type<unknown>;
    constructor(private container: ViewContainerRef) {}

    ngOnInit(): void {
        this.container.createComponent(this.component);
    }
}

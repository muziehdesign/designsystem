import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonDirective } from 'muzieh-ngcomponents';
import { Example } from 'src/app/example';
@Component({
    selector: 'app-buttons-demo',
    standalone: true,
    imports: [CommonModule, ButtonDirective],
    templateUrl: "./buttons-demo.component.html",
    styles: [`
      @import 'design/_button';
    `],
})
export class ButtonsDemoComponent implements OnInit, Example {

    public templateText:any = "";

    constructor() {
      this.templateText = require('html-loader!./buttons-demo.component.html').default;
     }

    ngOnInit(): void {}

    ngAfterContentInit(): void {

    }
}

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-button-design',
    templateUrl: './button-design.component.html',
    styleUrls: ['./button-design.component.scss'],
})
export class ButtonDesignComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    onButtonClick(): void {
      console.log('clicked');
    }
}

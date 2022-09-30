import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DEMONSTRATIONS } from 'src/app/demonstration/demonstrations.token';
import { SharedModule } from 'src/app/shared/shared.module';
import { ButtonsDemoComponent } from './demos/buttons-demo.component';

@Component({
    selector: 'app-buttons',
    standalone: true,
    imports: [CommonModule, SharedModule],
    templateUrl: './buttons.component.html',
    styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit {

    buttonsDemo = ButtonsDemoComponent;
    constructor(@Inject(DEMONSTRATIONS) private d: string) {
        console.log('buttons: ', d);
    }

    ngOnInit(): void {}
}

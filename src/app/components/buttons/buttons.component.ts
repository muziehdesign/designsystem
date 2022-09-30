import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DEMONSTRATIONS } from 'src/app/demonstration/demonstrations.token';

@Component({
    selector: 'app-buttons',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './buttons.component.html',
    styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent implements OnInit {
    constructor(@Inject(DEMONSTRATIONS) private d: string) {
        console.log('buttons: ', d);
    }

    ngOnInit(): void {}
}

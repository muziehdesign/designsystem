import { CommonModule } from '@angular/common';
import { Component, Inject, InjectionToken, OnInit } from '@angular/core';
import { DEMONSTRATIONS } from 'src/app/demonstration/demonstrations.token';

@Component({
    selector: 'app-colors',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './colors.component.html',
    styleUrls: ['./colors.component.scss'],
})
export class ColorsComponent implements OnInit {
    constructor(@Inject(DEMONSTRATIONS) private d: string) {
        console.log('colors: ', d);
    }

    ngOnInit(): void {}
}

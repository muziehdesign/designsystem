import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import 'reflect-metadata';

@Component({
    selector: 'app-resource-detail',
    templateUrl: './resource-detail.component.html',
    styleUrls: ['./resource-detail.component.scss'],
})
export class ResourceDetailComponent implements OnInit {
    activeId: number = 1;
    isLoading: boolean = false;
    constructor() {}

    ngOnInit(): void {
        const m = new ResourceDetailInputModel();
    }

    onNavChange() {
        this.isLoading = true;
        of([])
            .pipe(delay(1200))
            .subscribe(() => (this.isLoading = false));
    }
}

export class ResourceDetailInputModel {
    firstName?: string;
}
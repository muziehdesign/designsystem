import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'mz-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.scss'],
    standalone: true,
})
export class PageHeaderComponent implements OnInit {
    private pageTitleValue = 'Servicing Web';

    constructor(private title: Title) {}

    get pageTitle(): string {
        return this.pageTitleValue;
    }

    @Input() set pageTitle(newValue: string) {
        this.pageTitleValue = newValue;
        this.title.setTitle(newValue);
    }

    ngOnInit(): void {}
}

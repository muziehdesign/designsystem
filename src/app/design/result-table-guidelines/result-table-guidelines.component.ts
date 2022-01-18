import { Component, OnInit } from '@angular/core';
import { ResultTableModel } from 'muzieh-ngcomponents';

@Component({
    selector: 'app-result-table-guidelines',
    templateUrl: './result-table-guidelines.component.html',
    styleUrls: ['./result-table-guidelines.component.scss'],
})
export class ResultTableGuidelinesComponent implements OnInit {
    defaultModel: ResultTableModel = { results: [] };
    constructor() {}

    ngOnInit(): void {}
}

import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterComponent, FilterOptionModel, MuziehComponentsModule } from 'muzieh-ngcomponents';

@Component({
    selector: 'filter-options',
    standalone: true,
    imports: [CommonModule, FormsModule, MuziehComponentsModule, FilterComponent, OverlayModule],
    templateUrl: './filter-options.component.html',
    styleUrls: ['./filter-options.component.scss'],
})
export class FilterOptionsComponent {
    options: FilterOptionModel<string | number>[] = [
        { label: 'Option 1', selected: false, value: 1 },
        { label: 'Option 2', selected: false, value: 2 },
        { label: 'Option 3', selected: false, value: 3 },
    ];
    onFilterChanged($event: FilterOptionModel<string | number>[]) {}
}

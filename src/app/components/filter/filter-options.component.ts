import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterOptionModel, MuziehComponentsModule, OptionsFilterComponent } from 'muzieh-ngcomponents';
import { FilterComponent } from "../../../../projects/components/src/lib/filter/filter.component";

@Component({
    selector: 'filter-options',
    standalone: true,
    imports: [CommonModule, FormsModule, MuziehComponentsModule, OverlayModule, OptionsFilterComponent, FilterComponent],
    templateUrl: './filter-options.component.html',
    styleUrls: ['./filter-options.component.scss'],
})
export class FilterOptionsComponent {
    options: FilterOptionModel<string>[] = [
        { label: 'Option 1', selected: true, value: '1' },
        { label: 'Option 2', selected: false, value: '2' },
        { label: 'Option 3', selected: false, value: '3' },
    ];
    values = [];
    onFilterChanged($event: FilterOptionModel<string | number>[]) {}
}

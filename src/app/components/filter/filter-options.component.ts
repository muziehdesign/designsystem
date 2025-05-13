import { CdkMenuModule } from '@angular/cdk/menu';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MzCheckboxGroup, MzField } from '@muziehdesign/forms';
import { FilterOptionModel, OptionsFilterComponent, FilterComponent, FilterMenuComponent } from 'muzieh-ngcomponents';

@Component({
    selector: 'filter-options',
    imports: [
        CommonModule, 
        FormsModule, 
        OverlayModule, 
        OptionsFilterComponent, 
        FilterComponent, 
        CdkMenuModule, 
        FilterMenuComponent, 
        MzField, 
        MzCheckboxGroup],
    templateUrl: './filter-options.component.html',
    styleUrls: ['./filter-options.component.scss']
})
export class FilterOptionsComponent {
    options: FilterOptionModel<string>[] = [
        { label: 'Option 1', selected: true, value: '1' },
        { label: 'Option 2', selected: false, value: '2' },
        { label: 'Option 3', selected: false, value: '3' },
    ];
    values = [];
    dateRangeModel = new DateRangeModel();
    onFilterChanged($event: FilterOptionModel<string | number>[]) {}
}

export class DateRangeModel {
    startDate?: Date;
    endDate?: Date;;
    
}
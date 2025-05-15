import { CdkMenuModule } from '@angular/cdk/menu';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule, JsonPipe } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { DateType, ModelSchema, ModelSchemaFactory, MzCheckboxGroup, MzFormsModule, ObjectType, required, StringType } from '@muziehdesign/forms';
import { FilterOptionModel, OptionsFilterComponent, FilterComponent, FilterMenuComponent } from '@muziehdesign/components';

@Component({
    selector: 'filter-options',
    imports: [CommonModule, FormsModule, OverlayModule, OptionsFilterComponent, FilterComponent, CdkMenuModule, FilterMenuComponent, MzFormsModule, JsonPipe, MzCheckboxGroup],
    templateUrl: './filter-options.component.html',
    styleUrls: ['./filter-options.component.scss'],
})
export class FilterOptionsComponent {
    schema: ModelSchema<SearchInputModel>;
    model = new SearchInputModel();
    @ViewChild('filter1') filter1?: FilterComponent;
    constructor(private schemaFactory: ModelSchemaFactory) {
        this.schema = this.schemaFactory.build(this.model);
    }

    months = [
        { label: 'January', value: 1 },
        { label: 'February', value: 2 },
        { label: 'March', value: 3 },
        { label: 'April', value: 4 },
    ];

    singleOptionOptions = ['option1', 'option2', 'option3'];

    options: FilterOptionModel<string>[] = [
        { label: 'Option 1', selected: true, value: '1' },
        { label: 'Option 2', selected: false, value: '2' },
        { label: 'Option 3', selected: false, value: '3' },
    ];
    values = [];
    onFilterChanged($event: FilterOptionModel<string | number>[]) {}

    applyDateRange() {
        console.log('Date range applied:', this.model);
    }

    applyFilter<K extends keyof SearchInputModel>(key: K, value: SearchInputModel[K]) {
       // this.model[key] = value;
    }

    clearFilter<K extends keyof SearchInputModel>(key: K) {
        this.model[key] = undefined as SearchInputModel[K];
    }

    applyFilter2(v: NgForm, $event: Event) {
        console.log('my form submission', v.invalid, v.submitted, this.filter1);
        if(v.valid) {
            this.filter1?.close();
        }
    }
}

export class DateRangeModel {
    @DateType(required())
    startDate?: Date;
    endDate?: Date;
}

export class SearchInputModel {
    @ObjectType(DateRangeModel)
    dateRange: DateRangeModel = new DateRangeModel();
    @StringType(required())
    singleOption?: string;
    options?: string[];
}

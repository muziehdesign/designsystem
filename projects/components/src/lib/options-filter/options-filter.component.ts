import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FilterOptionModel } from '../filter/filter-option.model';
import { FormsModule, NgForm } from '@angular/forms';
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';

@Component({
    selector: 'mz-options-filter',
    standalone: true,
    imports: [FormsModule, CdkOverlayOrigin, CdkConnectedOverlay],
    templateUrl: './options-filter.component.html',
    styleUrl: './options-filter.component.scss',
})
export class OptionsFilterComponent {
    @Input() options?: FilterOptionModel<string>[];
    @Input() values: string[] = [];
    @Input() multiselect = false;
    @Input() label = 'Filter';
    @Output() change = new EventEmitter<string[]>();
    @ViewChild(NgForm) form!: NgForm;
    protected open = false;

    constructor() {
        console.log('options filter');
    }

    apply() {
        const newValues = this.options?.filter((o) => o.selected).map((o) => o.value) || [];
        this.change.emit(newValues);
        this.open = false;
    }

    clear() {
        this.open = false;
    }

    toggleOption(option: FilterOptionModel<string>) {
        option.selected = !option.selected;
    }

    toggleOverlay() {
        this.open = !this.open;
    }

    dismiss() {
        this.open = false;
    }
}

export type OptionValueType = string | number | string[] | number[];
export type SelectOption = {
  label: string;
  value: OptionValueType;
};
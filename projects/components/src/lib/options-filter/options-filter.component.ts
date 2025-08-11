import { Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FilterOptionModel } from '../filter/filter-option.model';
import { FormsModule, NgForm } from '@angular/forms';
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { SpinnerComponent } from '../spinner/spinner.component';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
    selector: 'mz-options-filter',
    imports: [FormsModule, CdkOverlayOrigin, CdkConnectedOverlay, SpinnerComponent, SvgIconComponent],
    templateUrl: './options-filter.component.html',
    styleUrl: './options-filter.component.scss',
    encapsulation: ViewEncapsulation.None
})
export class OptionsFilterComponent {
    @Input() options?: FilterOptionModel<string>[];
    @Input() values: string[] = [];
    @Input() label = 'Filter';
    @Output() change = new EventEmitter<string | undefined>();
    @Input() selected?: string;
    @ViewChild(NgForm) form!: NgForm;

    protected open = false;
    protected search: string = '';

    get filterLabel(): string {
        if (!this.selected) {
            return this.label;
        }
        const item = this.options?.find((o) => o.value === this.selected);
        return item ? `${this.label}: ${item.label}` : this.label;
    }

    get filteredOptions(): FilterOptionModel<string>[] {
        const options = this.options ?? [];
        const search = this.search.trim().toLowerCase();

        if (!search) {
            return options;
        }

        return options.filter((o) => o.label.toLowerCase().includes(search));
    }

    apply() {
        this.change.emit(this.selected);
        this.open = false;
    }

    clear() {
        this.selected = undefined;
        this.change.emit(undefined);
        this.open = false;
        this.search = '';
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
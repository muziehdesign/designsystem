import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterOptionModel } from './filter-option.model';

@Component({
    selector: 'mz-filter',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
    isOpen = false;
    search: string = '';
    @Input() allowMultipleSelect = false;
    @Input({ required: true }) options!: FilterOptionModel<string | number>[];
    @Input() label: string = 'Filter: ';
    @Output() selectionChange = new EventEmitter<FilterOptionModel<string | number>[]>();
    @ContentChild('filterButtonTemplate', { static: true }) filterButtonTemplate!: TemplateRef<any>;
    @ContentChild('filterDropdownTemplate', { static: true }) filterDropdownTemplate!: TemplateRef<any>;

    get filterLabel(): string {
        const selected = this.options.filter((option) => option.selected).map((option) => option.label);
        return selected.length ? `${this.label} ${selected.join(', ')}` : this.label;
    }

    get filteredOptions(): FilterOptionModel<string | number>[] {
        if (!this.search.trim()) {
            return this.options;
        }
        return this.options.filter((option) => option.label.toLowerCase().includes(this.search.toLowerCase()));
    }

    onOptionChange(changedOption: FilterOptionModel<string | number>): void {
        if (!this.allowMultipleSelect) {
            this.options.forEach((option) => {
                if (option !== changedOption) {
                    option.selected = false;
                }
            });
            this.applySelection();
        }
    }

    applySelection(): void {
        this.closeDropdown();
        this.emitSelectionChange();
    }

    resetSelection(): void {
        this.options.forEach((option) => (option.selected = false));
        this.applySelection();
    }

    openDropdown(): void {
        this.isOpen = true;
    }

    closeDropdown(): void {
        this.isOpen = false;
    }

    private emitSelectionChange(): void {
        const selectedOptions = this.options.filter((option) => option.selected);
        this.selectionChange.emit(selectedOptions);
    }
}

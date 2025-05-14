import { CdkMenuModule } from '@angular/cdk/menu';
import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, ContentChild, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
    selector: 'mz-filter',
    imports: [FormsModule, CommonModule, CdkMenuModule],
    templateUrl: './filter.component.html',
    styleUrl: './filter.component.scss',
})
export class FilterComponent {
    @Input() label = 'Filter';
    @Input() menuTemplate: TemplateRef<unknown> | null = null;
    @Output() clear = new EventEmitter<void>();
    @Output() apply = new EventEmitter<any>();

    @ViewChild(NgForm) menuForm?: NgForm;

    clearFilter() {
       this.clear.emit();
    }

    applyFilter() {
        if (this.menuForm?.valid) {
            console.log('emitting', this.menuForm.value);
            
        } else {
            console.log('Form is invalid');
        }        
    }
}

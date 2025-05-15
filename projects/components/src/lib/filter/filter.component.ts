import { CdkMenuModule, CdkMenuTrigger } from '@angular/cdk/menu';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, EventEmitter, Input, Output, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { SvgIconComponent } from '../svg-icon/svg-icon.component';

@Component({
    selector: 'mz-filter',
    exportAs: 'mzFilter',
    imports: [FormsModule, CommonModule, CdkMenuModule, SvgIconComponent],
    templateUrl: './filter.component.html',
    styleUrl: './filter.component.scss',
})
export class FilterComponent {
    @Input() label = 'Filter';
    @Input() display = '';
    @Input() menuTemplate: TemplateRef<unknown> | null = null;
    @Output() clear = new EventEmitter<void>();
    @Output() apply = new EventEmitter<any>();

    @ViewChild(NgForm) protected menuForm?: NgForm;
    @ViewChild(CdkMenuTrigger) protected menuTrigger?: CdkMenuTrigger;

    close() { 
        this.menuTrigger?.close();
    }

    protected clearFilter() {
        this.clear.emit();
    }

    protected applyFilter($event: Event) {
        console.log(this.menuForm?.value);
        if (this.menuForm?.valid === false) {
            console.log('form is invalid');
            $event.preventDefault();
            $event.stopPropagation();
            return;
        }
    }

    protected get filterLabel() {
        if(this.display) {
            return `${this.label}: ${this.display}`;
        }

        return this.label;
    }
}

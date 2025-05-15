import { CdkMenuModule } from '@angular/cdk/menu';
import { CommonModule } from '@angular/common';
import { AfterContentInit, ChangeDetectorRef, Component, ContentChild, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
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

    @ContentChild(NgForm) protected menuForm?: NgForm;
    protected isOpen = false;

    constructor(private changeDetectorRef: ChangeDetectorRef) {}

    clearFilter() {
        this.clear.emit();
    }

    applyFilter($event: Event) {
        console.log(this.menuForm?.value);
        if (this.menuForm?.valid === false) {
            console.log('form is invalid');
            $event.preventDefault();
            $event.stopPropagation();
            return;
        }
    }

    protected onOpened() {
        this.isOpen = true;
        this.changeDetectorRef.detectChanges();
    }

    protected onClosed() {
        this.isOpen = false;
        this.changeDetectorRef.detectChanges();
    }
}

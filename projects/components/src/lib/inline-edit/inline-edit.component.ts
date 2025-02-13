import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { ButtonDirective } from '../button.directive';

@Component({
    selector: 'mz-inline-edit',
    standalone: true,
    imports: [ButtonDirective, FormsModule, CommonModule],
    templateUrl: './inline-edit.component.html',
    styleUrl: './inline-edit.component.scss',
})
export class MzInlineEditComponent implements AfterViewInit {
    isEditing = false;
    busy = false;
    @Input() label?: string;
    @Input() layout: 'horizontal' | 'vertical' = 'horizontal';
    @Output() save = new EventEmitter();

    @ContentChild(NgModel) ngModel!: NgModel;
    @ContentChild(NgModel, { read: ElementRef }) private ngModelElement?: ElementRef;

    originalValue: unknown;

    constructor(private renderer: Renderer2) {}

    ngAfterViewInit(): void {
        this.renderer.listen(this.ngModelElement?.nativeElement, 'focus', () => {
            if (!this.isEditing) {
                this.activate();
            }
        });
    }

    activate() {
        this.isEditing = true;
        this.ngModel.control.markAsTouched();
        this.originalValue = this.ngModel.value;

        setTimeout(() => {
            this.ngModelElement?.nativeElement.focus();
        });
    }

    submitForm() {
        this.busy = true;
        this.save.emit(this.ngModel.value);
    }

    cancelEdit() {
        if (this.busy) {
            return;
        }
        this.ngModel.reset(this.originalValue);
        this.isEditing = false;
    }

    exitEdit() {
        this.isEditing = false;
        this.busy = false;
    }
}

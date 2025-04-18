import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, ContentChild, Input } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
    selector: 'mz-filter',
    standalone: true,
    imports: [CdkOverlayOrigin, CdkConnectedOverlay, FormsModule, CommonModule],
    templateUrl: './filter.component.html',
    styleUrl: './filter.component.scss',
})
export class FilterComponent implements AfterContentInit {
    @Input() label = 'Filter';
    @ContentChild(NgForm) menuForm!: NgForm;
    protected open = false;
    private initialValues: any;

    ngAfterContentInit(): void {
      this.initialValues = this.menuForm.value;
    }

    toggleOverlay() {
        this.open = !this.open;
    }

    dismiss() {
        this.open = false;
        if(this.menuForm.options.updateOn === 'submit') {
          this.menuForm.resetForm(this.initialValues);
        }
    }

    clear() {
      this.open = false;
    }

    apply() {
      this.open = false;
      console.log('applied', this.menuForm.value);
    }
}

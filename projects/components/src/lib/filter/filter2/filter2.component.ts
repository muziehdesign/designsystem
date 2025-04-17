import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { CommonModule, JsonPipe } from '@angular/common';
import { AfterContentInit, Component, ContentChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
    selector: 'mz-filter2',
    standalone: true,
    imports: [JsonPipe, CdkOverlayOrigin, CdkConnectedOverlay, FormsModule, CommonModule],
    templateUrl: './filter2.component.html',
    styleUrl: './filter2.component.scss',
})
export class Filter2Component implements AfterContentInit {
    protected open = false;
    @ContentChild(NgForm) menuForm!: NgForm;
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

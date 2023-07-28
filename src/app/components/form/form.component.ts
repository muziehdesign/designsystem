import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ButtonDirective, SvgIconComponent } from 'muzieh-ngcomponents';
import { of } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    standalone: true,
    imports: [ButtonDirective, CommonModule, FormsModule, SvgIconComponent],
})
export class FormComponent implements OnInit {
    model: DeliveryAddressInputModel = { unexpectedError: false };
    isLoading: boolean = false;
    error: string | undefined;
    isSuccessful: boolean | undefined;
    @ViewChild('addressForm', { static: true }) addressForm?: NgForm;
    submitCount = 0;
    constructor() {}

    ngOnInit(): void {}

    onFormChange() {
        if(this.isSuccessful == true) {
            this.isSuccessful = undefined;
        }
    }

    onSubmit() {
        this.submitCount++;
        console.log('is submitting event only when is not busy', this.isLoading)
        this.isSuccessful = undefined;

        if (this.addressForm!.invalid) {
            return;
        }

        this.isLoading = true;
        of(null)
            .pipe(
                delay(1500),
                finalize(() => (this.isLoading = false))
            )
            .subscribe((x) => {
                this.isSuccessful = this.model.unexpectedError == false;
            });
    }

    displayError(controlKey: string) {
        return this.addressForm?.form.controls[controlKey]?.invalid && (this.addressForm?.form.controls[controlKey]?.touched || this.addressForm?.submitted);
    }
}

interface DeliveryAddressInputModel {
    recipientName?: string;
    address1?: string;
    address2?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    navigationInstructions?: string;
    securityCode?: string;
    unexpectedError: boolean;
}

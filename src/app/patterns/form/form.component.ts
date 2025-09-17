import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { BooleanType, ModelSchema, ModelSchemaFactory, MzFormsModule, required, StringType } from '@muziehdesign/forms';
import { MzButton, SvgIconComponent } from '@muziehdesign/components';
import { of } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    imports: [MzButton, CommonModule, FormsModule, MzFormsModule, SvgIconComponent],
})
export class FormComponent {
    schema: ModelSchema<DeliveryAddressInputModel>;
    model = new DeliveryAddressInputModel();
    isLoading: boolean = false;
    isSuccessful: boolean | undefined;
    @ViewChild('addressForm', { static: true }) addressForm?: NgForm;

    constructor(private factory: ModelSchemaFactory) {
        this.model.unexpectedError = false;
        this.schema = factory.build(this.model);
    }

    onFormChange() {
        if (this.isSuccessful == true) {
            this.isSuccessful = undefined;
        }
    }

    onSubmit() {
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

export class DeliveryAddressInputModel {
    @StringType(required('Name is required'))
    recipientName?: string;
    @StringType(required('Street is required'))
    address1?: string;
    @StringType()
    address2?: string;
    @StringType(required('City is required'))
    city?: string;
    @StringType(required('State is required'))
    state?: string;
    @StringType(required('Zip code is required'))
    zipCode?: string;
    @StringType()
    navigationInstructions?: string;
    @StringType()
    securityCode?: string;
    @BooleanType()
    unexpectedError?: boolean;
}

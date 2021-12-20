import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  model: DeliveryAddressInputModel = {};
  scenario: formScenario = formScenario.success;
  isLoading: boolean = false;
  isSuccess: boolean | undefined;
  error: string | undefined;
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    this.isLoading = true;
    this.isSuccess = undefined;
    of(null)
      .pipe(
        delay(1800),
        finalize(() => (this.isLoading = false))
      )
      .subscribe(() => {
        this.isSuccess = this.scenario == formScenario.success;
        if(this.scenario == formScenario.unexpectederror) {
          this.error = 'Unexpected error, try again.';
        } else if(this.scenario == formScenario.validationerror) {
          this.error = 'Correct the field errors and try again.';
        }
      });
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
}

enum formScenario {
  success = 'success',
  validationerror = 'validationerror',
  unexpectederror = 'unexpectederror'
}

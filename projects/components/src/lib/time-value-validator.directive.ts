import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: 'input[type=time]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: TimeValueValidatorDirective,
    multi: true
  }],
  standalone: true,
})
export class TimeValueValidatorDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (value == null || value.length == 0) {
      return null;
    }

    /*
    const parts = value.split(':');
    if (parts.length != 2) {
      return { "time": "invalid time" };
    }*/

    return null;
  }
}

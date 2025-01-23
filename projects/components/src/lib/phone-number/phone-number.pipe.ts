import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mzPhoneNumber',
  standalone: true,
})
export class PhoneNumberPipe implements PipeTransform {

  transform(number?: string): string | null {
        if (!number) {
            return null;
        }

        const phoneNumber = number.replace(/^\+1/, '').replace(/\D/g, '');
        if (phoneNumber.length === 10) {
            return phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
        }
        return number;
    }
}

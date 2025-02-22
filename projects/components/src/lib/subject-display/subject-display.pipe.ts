import { Pipe, PipeTransform } from '@angular/core';
import { Subject } from '../models/subject';

@Pipe({
  name: 'mzSubjectDisplay',
  standalone: true,
})
export class SubjectDisplayPipe implements PipeTransform {
    transform(subject?: Subject): string | null {
        if (!subject) {
            return null;
        }
        return subject.givenName && subject.familyName ? `${subject.givenName} ${subject.familyName}` : subject.userPrincipalName;
    }
}

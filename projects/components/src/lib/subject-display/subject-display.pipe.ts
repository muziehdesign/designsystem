import { Pipe, PipeTransform } from '@angular/core';
import { Subject } from '../models/subject';

@Pipe({
  name: 'mzSubjectDisplay',
  standalone: true,
})
export class SubjectDisplayPipe implements PipeTransform {
    transform(subject?: Subject, defaultValue?: string): string | null {
        if (!subject) {
            return defaultValue || null;
        }
        return subject.givenName && subject.familyName ? `${subject.givenName} ${subject.familyName}` : subject.userPrincipalName;
    }
}

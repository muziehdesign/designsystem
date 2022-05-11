import { SubjectDto } from '@app/models/dto/subject.dto';
import { SubjectDisplayPipe } from './subject-display.pipe';

describe('SubjectDisplayPipe', () => {
    let pipe: SubjectDisplayPipe;

    beforeEach(() => {
        pipe = new SubjectDisplayPipe();
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should map values', () => {
        expect(pipe.transform(null)).toBe('');
        expect(pipe.transform({ givenName: 'Elthon', familyName: 'John', userPrincipalName: 'elthonjohn' } as SubjectDto)).toBe('Elthon John');
        expect(pipe.transform({ givenName: 'Elthon', userPrincipalName: 'elthonjohn' } as SubjectDto)).toBe('elthonjohn');
        expect(pipe.transform({ familyName: 'John', userPrincipalName: 'elthonjohn' } as SubjectDto)).toBe('elthonjohn');
    });
});

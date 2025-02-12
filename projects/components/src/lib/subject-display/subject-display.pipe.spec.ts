import { Subject } from '../models/subject';
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
        expect(pipe.transform({ givenName: 'Elthon', familyName: 'John', userPrincipalName: 'elthonjohn' } as Subject)).toBe('Elthon John');
        expect(pipe.transform({ givenName: 'Elthon', userPrincipalName: 'elthonjohn' } as Subject)).toBe('elthonjohn');
        expect(pipe.transform({ familyName: 'John', userPrincipalName: 'elthonjohn' } as Subject)).toBe('elthonjohn');
        expect(pipe.transform(undefined)).toBe(null);
        expect(pipe.transform(undefined, 'N/A')).toBe('N/A');
    });
});

import { EnumDisplayPipe } from './enum-display.pipe';

describe('EnumDisplayPipe', () => {
    let pipe: EnumDisplayPipe;

    beforeEach(() => {
        pipe = new EnumDisplayPipe();
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it(`should transform values correctly`, () => {
        expect(pipe.transform('')).toBe('');
        expect(pipe.transform('t')).toBe('T');
        expect(pipe.transform('ABCD')).toBe('A b c d');
        expect(pipe.transform('test')).toBe('Test');
        expect(pipe.transform('testA')).toBe('Test a');
        expect(pipe.transform('testAB')).toBe('Test a b');
        expect(pipe.transform('testValue')).toBe('Test value');
        expect(pipe.transform('TestValue')).toBe('Test value');
        expect(pipe.transform('aAbBcCdD')).toBe('A ab bc cd d');
        expect(pipe.transform('partiallyFulfilled')).toBe('Partially fulfilled');
        expect(pipe.transform('testValueSecondTry')).toBe('Test value second try');
    });
});

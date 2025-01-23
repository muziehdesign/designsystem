import { PhoneNumberPipe } from './phone-number.pipe';

describe('PhoneNumberPipe', () => {
    let phoneNumberPipe: PhoneNumberPipe;

    beforeEach(() => {
        phoneNumberPipe = new PhoneNumberPipe();
    });

    it('Should format a phone number', () => {
        expect(phoneNumberPipe.transform('1112223333')).toEqual('(111) 222-3333');
        expect(phoneNumberPipe.transform('+12223334444')).toEqual('(222) 333-4444');
        expect(phoneNumberPipe.transform(undefined)).toEqual(null);
    });
});

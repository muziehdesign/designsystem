import { PhoneNumberPipe } from './phone-number.pipe';

describe('PhoneNumberPipe', () => {
    let phoneNumberPipe: PhoneNumberPipe;

    beforeEach(() => {
        phoneNumberPipe = new PhoneNumberPipe();
    });

    it('Should format a phone number', () => {
        expect(phoneNumberPipe.transform('1112223333')).toEqual('(111) 222-3333');
    });
});

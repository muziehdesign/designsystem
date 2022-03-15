import { DatePipe } from '@angular/common';
import { DateDisplayPipe } from './date-display.pipe';

describe('mzDateDisplay', () => {
    let pipe: DateDisplayPipe;
    const date = new Date('2021-05-05T00:00:00+00:00');
    const conciseDate = `${date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}`;
    const detailedDate = `${date.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })} ${date.toLocaleTimeString()}`;

    beforeEach(() => {
        const datePipe = new DatePipe('en-US');
        pipe = new DateDisplayPipe(datePipe);
    });

    it('should create', () => {
        expect(pipe).toBeTruthy();
    });

    it('should display in concise format', () => {
        const transformedDate = pipe.transform(date, 'concise');
        expect(transformedDate).toEqual(conciseDate);
    });

    it('should display in detailed format', () => {
        const transformedDate = pipe.transform(date, 'detailed');
        expect(transformedDate).toEqual(detailedDate);    });

    it('should display in detailed format by default', () => {
        const transformedDate = pipe.transform(date, '');
        expect(transformedDate).toEqual(conciseDate);    });
});

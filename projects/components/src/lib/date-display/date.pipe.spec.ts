import { MzDatePipeConfig } from './date-display-config';
import { MzDatePipe } from './date.pipe';

describe('DatePipe', () => {
  it('formats date', () => {
    const pipe = new MzDatePipe('en-US');

    const date = '2025-01-23T15:52:58.8761011-07:00';
    expect(pipe.transform(date, 'short', '-07:00')).toEqual('01/23/2025 03:52 PM');
    expect(pipe.transform(date, 'full', '-07:00')).toEqual('Thursday, January 23, 2025 at 3:52:58 PM GMT-07:00');
    expect(pipe.transform(date, 'shortDate', '-07:00')).toEqual('01/23/2025');

    expect(pipe.transform(date, 'short', '+00:00')).toEqual('01/23/2025 10:52 PM');
    expect(pipe.transform(date, 'shortDate', '+00:00')).toEqual('01/23/2025');
    expect(pipe.transform(date, 'full', '-00:00')).toEqual('Thursday, January 23, 2025 at 10:52:58 PM GMT+00:00');

  });

  it('respects configured format options', ()=> {
    const pipe1 = new MzDatePipe('en-US');
    const pipe2 = new MzDatePipe('en-US', {
      formats: new Map<string, string>([
        ['short', 'MMM/d/yy']
      ])
    } satisfies MzDatePipeConfig);
    const date = '2025-01-23T15:52:58.8761011-07:00';
    expect(pipe1.transform(date, 'short', '-07:00')).toEqual('01/23/2025 03:52 PM');
    expect(pipe2.transform(date, 'short', '-07:00')).toEqual('Jan/23/25');
  });

  it('formats date with original timezone', ()=> {
    const pipe = new MzDatePipe('en-US');
    expect(pipe.transform('2025-01-23T15:52:58.8761011-07:00', 'short', 'original')).toEqual('01/23/2025 03:52 PM');
    expect(pipe.transform('2025-01-23T15:52:58.8761011-08:00', 'short', 'original')).toEqual('01/23/2025 03:52 PM');
  });

});

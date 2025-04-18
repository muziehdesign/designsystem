import { TestBed } from '@angular/core/testing';

import { MzDialog } from './mz-dialog.service';

describe('MzDialog', () => {
  let service: MzDialog;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MzDialog);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

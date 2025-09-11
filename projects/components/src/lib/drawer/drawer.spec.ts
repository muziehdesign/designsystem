import { TestBed } from '@angular/core/testing';

import { MzDrawer } from './drawer';

describe('MzDrawer', () => {
  let service: MzDrawer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MzDrawer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

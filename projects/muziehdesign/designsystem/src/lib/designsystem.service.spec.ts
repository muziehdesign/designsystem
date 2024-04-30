import { TestBed } from '@angular/core/testing';

import { DesignsystemService } from './designsystem.service';

describe('DesignsystemService', () => {
  let service: DesignsystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesignsystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

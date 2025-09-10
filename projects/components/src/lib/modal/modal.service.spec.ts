import { TestBed } from '@angular/core/testing';

import { MzModalService } from './modal.service';

describe('ModalService', () => {
  let service: MzModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MzModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

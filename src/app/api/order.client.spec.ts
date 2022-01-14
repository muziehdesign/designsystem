import { TestBed } from '@angular/core/testing';

import { OrderClient } from './order.client';

describe('OrderClient', () => {
  let service: OrderClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

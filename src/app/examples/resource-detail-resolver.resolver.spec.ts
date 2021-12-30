import { TestBed } from '@angular/core/testing';

import { ResourceDetailResolverResolver } from './resource-detail-resolver.resolver';

describe('ResourceDetailResolverResolver', () => {
  let resolver: ResourceDetailResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ResourceDetailResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

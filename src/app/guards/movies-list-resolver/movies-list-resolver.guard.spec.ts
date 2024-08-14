import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { moviesListResolverGuard } from './movies-list-resolver.guard';

describe('moviesListResolverGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => moviesListResolverGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

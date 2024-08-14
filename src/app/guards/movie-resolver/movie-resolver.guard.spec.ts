import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { movieResolverGuard } from './movie-resolver.guard';

describe('movieResolverGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => movieResolverGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

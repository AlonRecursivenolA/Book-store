import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isloggedoffGuard } from './isloggedoff-guard';

describe('isloggedoffGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isloggedoffGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ProtectionRoutesGuard } from './protection-routes.guard';

describe('ProtectionRoutesGuard', () => {
  let guard: ProtectionRoutesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProtectionRoutesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

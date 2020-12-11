import { TestBed } from '@angular/core/testing';

import { ManageGuardGuard } from './manage-guard.guard';

describe('ManageGuardGuard', () => {
  let guard: ManageGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ManageGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

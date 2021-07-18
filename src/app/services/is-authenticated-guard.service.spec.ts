import { TestBed } from '@angular/core/testing';

import { IsAuthenticatedGuardService } from './is-authenticated-guard.service';

describe('IsAuthenticatedGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IsAuthenticatedGuardService = TestBed.get(IsAuthenticatedGuardService);
    expect(service).toBeTruthy();
  });
});

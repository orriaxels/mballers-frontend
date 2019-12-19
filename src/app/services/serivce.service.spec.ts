import { TestBed } from '@angular/core/testing';

import { SerivceService } from './serivce.service';

describe('SerivceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SerivceService = TestBed.get(SerivceService);
    expect(service).toBeTruthy();
  });
});

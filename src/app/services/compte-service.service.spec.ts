import { TestBed } from '@angular/core/testing';

import { CompteServiceService } from './compte-service.service';

describe('CompteServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompteServiceService = TestBed.get(CompteServiceService);
    expect(service).toBeTruthy();
  });
});

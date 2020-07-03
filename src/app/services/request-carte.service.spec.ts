import { TestBed } from '@angular/core/testing';

import { RequestCarteService } from './request-carte.service';

describe('RequestCarteService', () => {
  let service: RequestCarteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestCarteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

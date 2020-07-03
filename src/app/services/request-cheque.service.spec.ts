import { TestBed } from '@angular/core/testing';

import { RequestChequeService } from './request-cheque.service';

describe('RequestChequeService', () => {
  let service: RequestChequeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestChequeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

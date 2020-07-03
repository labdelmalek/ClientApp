import { TestBed } from '@angular/core/testing';

import { ClientdataserviceService } from './clientdataservice.service';

describe('ClientdataserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientdataserviceService = TestBed.get(ClientdataserviceService);
    expect(service).toBeTruthy();
  });
});

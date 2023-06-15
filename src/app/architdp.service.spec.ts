import { TestBed } from '@angular/core/testing';

import { ArchitdpService } from './architdp.service';

describe('ArchitdpService', () => {
  let service: ArchitdpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArchitdpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

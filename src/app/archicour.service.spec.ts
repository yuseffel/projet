import { TestBed } from '@angular/core/testing';

import { ArchicourService } from './archicour.service';

describe('ArchicourService', () => {
  let service: ArchicourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArchicourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

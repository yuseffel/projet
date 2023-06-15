import { TestBed } from '@angular/core/testing';

import { ArchiexamService } from './archiexam.service';

describe('ArchiexamService', () => {
  let service: ArchiexamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArchiexamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

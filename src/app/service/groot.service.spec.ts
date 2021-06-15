import { TestBed } from '@angular/core/testing';

import { GrootService } from './groot.service';

describe('GrootService', () => {
  let service: GrootService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrootService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { InternationalCardService } from './international-card.service';

describe('InternationalCardService', () => {
  let service: InternationalCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InternationalCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ValidationZelleService } from './validation-zelle.service';

describe('ValidationZelleService', () => {
  let service: ValidationZelleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidationZelleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

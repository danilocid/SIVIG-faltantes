import { TestBed } from '@angular/core/testing';

import { FaltantesService } from './faltantes.service';

describe('FaltantesService', () => {
  let service: FaltantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaltantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

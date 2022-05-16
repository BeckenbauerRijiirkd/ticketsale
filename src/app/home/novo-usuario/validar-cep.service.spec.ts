import { TestBed } from '@angular/core/testing';

import { ValidarCepService } from './validar-cep.service';

describe('ValidarCepService', () => {
  let service: ValidarCepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidarCepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

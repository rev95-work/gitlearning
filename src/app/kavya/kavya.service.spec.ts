import { TestBed, inject } from '@angular/core/testing';

import { KavyaService } from './kavya.service';

describe('KavyaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KavyaService]
    });
  });

  it('should be created', inject([KavyaService], (service: KavyaService) => {
    expect(service).toBeTruthy();
  }));
});

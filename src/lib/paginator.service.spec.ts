import { TestBed, inject } from '@angular/core/testing';

import { CiagPaginatorService } from './ciag-paginator.service';

describe('CiagPaginatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CiagPaginatorService]
    });
  });

  it('should be created', inject([CiagPaginatorService], (service: CiagPaginatorService) => {
    expect(service).toBeTruthy();
  }));
});

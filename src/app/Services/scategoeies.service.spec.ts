import { TestBed } from '@angular/core/testing';

import { ScategoeiesService } from './scategoeies.service';

describe('ScategoeiesService', () => {
  let service: ScategoeiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScategoeiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

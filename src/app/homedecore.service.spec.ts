import { TestBed } from '@angular/core/testing';

import { HomedecoreService } from './homedecore.service';

describe('MicroovenService', () => {
  let service: HomedecoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomedecoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
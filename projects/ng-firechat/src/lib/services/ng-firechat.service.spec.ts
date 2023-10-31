import { TestBed } from '@angular/core/testing';

import { NgFirechatService } from './ng-firechat.service';

describe('NgFirechatService', () => {
  let service: NgFirechatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgFirechatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

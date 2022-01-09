import { TestBed } from '@angular/core/testing';

import { PingServerService } from './ping-server.service';

describe('PingServerService', () => {
  let service: PingServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PingServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

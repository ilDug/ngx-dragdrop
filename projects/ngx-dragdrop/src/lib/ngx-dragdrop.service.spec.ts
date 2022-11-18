import { TestBed } from '@angular/core/testing';

import { NgxDragdropService } from './ngx-dragdrop.service';

describe('NgxDragdropService', () => {
  let service: NgxDragdropService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDragdropService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

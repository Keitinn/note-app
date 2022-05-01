import { TestBed } from '@angular/core/testing';

import { NoteManagerService } from './note-manager.service';

describe('NoteManagerService', () => {
  let service: NoteManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

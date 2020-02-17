/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PostNlService } from './post-nl.service';

describe('Service: PostNl', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostNlService]
    });
  });

  it('should ...', inject([PostNlService], (service: PostNlService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed } from '@angular/core/testing';

import { PostserviceService } from './posts/post.service';

describe('PostserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostserviceService = TestBed.get(PostserviceService);
    expect(service).toBeTruthy();
  });
});

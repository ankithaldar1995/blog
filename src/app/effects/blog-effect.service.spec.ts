/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BlogEffectService } from './blog-effect.service';

describe('BlogEffectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogEffectService]
    });
  });

  it('should ...', inject([BlogEffectService], (service: BlogEffectService) => {
    expect(service).toBeTruthy();
  }));
});

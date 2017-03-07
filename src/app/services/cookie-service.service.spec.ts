/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CookieServiceService } from './cookie-service.service';

describe('CookieServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CookieServiceService]
    });
  });

  it('should ...', inject([CookieServiceService], (service: CookieServiceService) => {
    expect(service).toBeTruthy();
  }));
});

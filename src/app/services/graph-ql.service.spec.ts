/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GraphQLService } from './graph-ql.service';

describe('GraphQLService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GraphQLService]
    });
  });

  it('should ...', inject([GraphQLService], (service: GraphQLService) => {
    expect(service).toBeTruthy();
  }));
});

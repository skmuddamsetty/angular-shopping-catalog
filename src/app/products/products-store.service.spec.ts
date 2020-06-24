import { TestBed } from '@angular/core/testing';

import { ProductsStoreService } from './products-store.service';

describe('ProductsStoreService', () => {
  let service: ProductsStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

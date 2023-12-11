import { TestBed } from '@angular/core/testing';

import { ShopingCardBasketService } from './shoping-card-basket.service';

describe('ShopingCardBasketService', () => {
  let service: ShopingCardBasketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopingCardBasketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

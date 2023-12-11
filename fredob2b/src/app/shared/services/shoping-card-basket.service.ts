import { Injectable } from '@angular/core';
import { ShopingCardBasket } from '../models/ShopingCardBasket';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopingCardBasketService {
  private _shopingCardDetail = new BehaviorSubject<ShopingCardBasket  | null>(null) ;
  private _shopingCardDetail$ = this._shopingCardDetail.asObservable();

  private _deleteShopingCard = new Subject<number>();
  private _deleteShopingCard$ = this._deleteShopingCard.asObservable();

  getShopingCardDetail(): Observable<ShopingCardBasket | null>{
    return this._shopingCardDetail$;
  }

  setShopingCardDetail(lastedValue: ShopingCardBasket){
    this._shopingCardDetail.next(lastedValue);
  }

  getnotifiDeleteProduct(): Observable<number>{
    return this._deleteShopingCard$;
  }
  setnotifiDeleteProduct(id: number){
    return this._deleteShopingCard.next(id);
  }

  constructor() { }
}

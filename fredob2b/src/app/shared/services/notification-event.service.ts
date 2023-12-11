import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ShopingCardEvents } from '../models/ShopingCardEvents';

@Injectable({
  providedIn: 'root'
})
export class NotificationEventService {

  private _shopingCardEvent = new Subject<ShopingCardEvents | null>();
  private _shopingCardEvent$ = this._shopingCardEvent.asObservable();


  subscribeEvent(): Observable<ShopingCardEvents | null>{
    return this._shopingCardEvent$;
  }

  sendEvent(lastedValue: ShopingCardEvents){
    this._shopingCardEvent.next(lastedValue);
  }


  constructor() { }
}

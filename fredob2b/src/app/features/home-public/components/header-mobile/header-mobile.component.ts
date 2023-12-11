import { Component } from '@angular/core';
import { ShopingCardBasket } from 'src/app/shared/models/ShopingCardBasket';
import { ShopingCardBasketService } from 'src/app/shared/services/shoping-card-basket.service';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss']
})
export class HeaderMobileComponent {
  shopingCardBasket:ShopingCardBasket | null | undefined

  constructor(private _shopingCardService: ShopingCardBasketService){
    this._shopingCardService.getShopingCardDetail().subscribe(cardDetail =>{
      console.log(cardDetail);
      this.shopingCardBasket = cardDetail;

      
    }

    )

  }



}

import { Component } from '@angular/core';
import { ShopingCardBasket } from 'src/app/shared/models/ShopingCardBasket';
import { ShopingCardBasketService } from 'src/app/shared/services/shoping-card-basket.service';

@Component({
  selector: 'app-dropcart',
  templateUrl: './dropcart.component.html',
  styleUrls: ['./dropcart.component.scss']
})
export class DropcartComponent {

  shopingCardBasket:ShopingCardBasket | null | undefined
  
  constructor(private _shopingCardService: ShopingCardBasketService){
    this._shopingCardService.getShopingCardDetail().subscribe(cardDetail =>{
      console.log(cardDetail);
      this.shopingCardBasket = cardDetail;
     }
  )
  }


  deleteProduct(id:number){
    
    this._shopingCardService.setnotifiDeleteProduct(id);
  }

}

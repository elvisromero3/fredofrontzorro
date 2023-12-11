import { Component, OnInit } from '@angular/core';
import { ShopingCardDetailDto } from 'src/app/services/api/fredob2b/models';
import { ShopingCardBasket } from 'src/app/shared/models/ShopingCardBasket';
import { ShopingCardBasketService } from 'src/app/shared/services/shoping-card-basket.service';

@Component({
  selector: 'app-checkout-block',
  templateUrl: './checkout-block.component.html',
  styleUrls: ['./checkout-block.component.scss']
})
export class CheckoutBlockComponent implements OnInit {

  shopingCardBasket:ShopingCardBasket | null | undefined
  productList:ShopingCardDetailDto[] | undefined;

  constructor(private _shopingCardService: ShopingCardBasketService){
  }
  ngOnInit(): void {
    this._shopingCardService.getShopingCardDetail().subscribe(cardDetail =>{
   
      this.productList = cardDetail?.products;
      this.shopingCardBasket = cardDetail;
     })
  }


  
}

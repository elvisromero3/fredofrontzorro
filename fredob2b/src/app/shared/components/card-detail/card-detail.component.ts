import { Component, OnInit } from '@angular/core';

import { ShopingCardBasket } from '../../models/ShopingCardBasket';
import { ShopingCardBasketService } from '../../services/shoping-card-basket.service';
import { CommonModule } from '@angular/common';
import { ShopingCardDetailDto } from "src/app/services/api/fredob2b/models";
import { RouterLink } from '@angular/router';



@Component({
  standalone: true,
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss'],
  imports:[CommonModule,RouterLink]
})
export class CardDetailComponent implements OnInit {

  shopingCardBasket:ShopingCardBasket | null | undefined
  productList:ShopingCardDetailDto[] | undefined;

  constructor(private _shopingCardService: ShopingCardBasketService){
  }
  ngOnInit(): void {
    this._shopingCardService.getShopingCardDetail().subscribe(cardDetail =>{
      console.log(cardDetail?.products);
      this.productList = cardDetail?.products;
      this.shopingCardBasket = cardDetail;
     })
  }


  addQuantity(item: ShopingCardDetailDto){
    item.quantity!++;
    item.totalLine = item.quantity! * item.unitPrice!
  }

  subQuantity(item: ShopingCardDetailDto){
    if (item.quantity! <= 1 ){
      return  ;
    } 
      item.quantity!--;
      item.totalLine = item.quantity! * item.unitPrice!
  }

  
}

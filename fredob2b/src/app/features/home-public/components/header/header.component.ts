import { Component,ViewChild,HostListener, ElementRef,Input,OnInit } from '@angular/core';
import { ShopingCardDetailDto } from 'src/app/services/api/fredob2b/models';
import { ShopingCardBasket } from 'src/app/shared/models/ShopingCardBasket';
import { ShopingCardBasketService } from 'src/app/shared/services/shoping-card-basket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showDropCart:Boolean =false;
  @Input() shopingCard:ShopingCardDetailDto[] | undefined
 
  shopingCardBasket:ShopingCardBasket | null | undefined

  @ViewChild('dropcart') dropcart!: ElementRef;

  constructor(private _shopingCardService: ShopingCardBasketService){
    this._shopingCardService.getShopingCardDetail().subscribe(cardDetail =>{
   
      this.shopingCardBasket = cardDetail;

      
    }

    )

  }


  openDropCart(){
    this.showDropCart = !this.showDropCart;
  }

  ngOnInit(): void {
   
  }
  
  // @HostListener('document:click')
  // clickout() {
  //   if(this.dropcart.nativeElement.classList.contains('indicator--open')){
  //     this.showDropCart = false;
  //   }
   
  // }
}

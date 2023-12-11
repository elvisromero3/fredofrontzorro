import { Router, ActivatedRoute, ParamMap, RouterLink } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ShopingCardBasketService } from '../../services/shoping-card-basket.service';
import { ShopingCardService } from 'src/app/services/api/fredob2b/services';
import { ProductDto } from 'src/app/services/api/fredob2b/models';


@Component({
  standalone: true,
  selector: 'app-product-full',
  templateUrl: './product-full.component.html',
  styleUrls: ['./product-full.component.scss'],
  imports:[RouterLink]
})
export class ProductFullComponent implements OnInit {
 
  product: ProductDto | undefined

  constructor(private shopingCardServices: ShopingCardService,
    private route: ActivatedRoute){

  }
 
 
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));


    this.shopingCardServices.apiShopingCardProductByIdIdGet$Json({id: id})
    .subscribe( resp => {

      this.product = resp;
       
    });
    
    
  }

}

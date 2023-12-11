import { Component, OnInit } from '@angular/core';
import { ProductDto } from 'src/app/services/api/fredob2b/models/product-dto';
import { ProductService } from 'src/app/services/api/fredob2b/services';

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent implements OnInit
 {
  productList:ProductDto[]=[];
  isSpinning:boolean = true;


  constructor(
    private productServices:ProductService
  ){}
 
    ngOnInit(): void {
      this.getData();
  }
  

  getData(): void {
    this.productServices.apiProductGet$Json()
    .subscribe(resp => {
      this.productList =resp;
      this.isSpinning = false;
    });
  }

}



import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopListComponent } from './page/shop-list/shop-list.component';
import { ShopRoutingModule } from './shop-routing.module';
import { NgZorroAntdModule } from 'src/app/shared/ng-zorro-antd/ng-zorro-antd.module';
import { ProductCardComponent } from 'src/app/shared/components/product-card/product-card.component';



@NgModule({
  declarations: [
    ShopListComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    NgZorroAntdModule,

  ]
})
export class ShopModule { }

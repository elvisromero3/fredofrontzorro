import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePublicRoutingModule } from './home-public-routing.module';
import { AdminComponent } from './page/admin/admin.component';
import { CategoryComponent } from 'src/app/shared/components/category/category.component';
import { ViewOptionsComponent} from 'src/app/shared/components/view-options/view-options.component';
import { ProductCardComponent } from 'src/app/shared/components/product-card/product-card.component';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { DropcartComponent } from './components/dropcart/dropcart.component';
import { HeaderMobileComponent } from './components/header-mobile/header-mobile.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ProductBlockComponent } from './page/product-block/product-block.component';
import { MasterComponent } from './page/master/master.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { CheckoutBlockComponent } from './page/checkout-block/checkout-block.component';
@NgModule({
  declarations: [
    AdminComponent,
   CategoryComponent,
   ViewOptionsComponent,
   HeaderComponent,
   SearchComponent,
   DropcartComponent,
   HeaderMobileComponent,
   ProductBlockComponent,
   MasterComponent,
   CheckoutBlockComponent,
   
   
  ],
  imports: [
    CommonModule,
    HomePublicRoutingModule,
    ProductCardComponent,
    NzPaginationModule,
    NgxSkeletonLoaderModule,
    NzDropDownModule
  ]
})
export class HomePublicModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './page/admin/admin.component';
import { ProductFullComponent } from 'src/app/shared/components/product-full/product-full.component';
import { CardDetailComponent } from 'src/app/shared/components/card-detail/card-detail.component';
import { MasterComponent } from './page/master/master.component';
import { CheckoutBlockComponent } from './page/checkout-block/checkout-block.component';
const routes: Routes = [
  
  {
    path: '', component: MasterComponent,
    children :[
      { path: '', redirectTo: 'shop', pathMatch: 'full' },
       {
       path: 'shop', component:AdminComponent 
       },
      {
        path: 'productfull/:id', component: ProductFullComponent
      },
      {
        path: 'carddetail', component: CardDetailComponent
      },
      {
        path: 'checkout', component: CheckoutBlockComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePublicRoutingModule { }

import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShopListComponent } from "./page/shop-list/shop-list.component";

const routes: Routes = [
    {
        path:'',
            children : [
                {    
                 path: '',   component: ShopListComponent
                }
            ]

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShopRoutingModule{}
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './features/account/pages/login/login.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  {path: '', component:ContentLayoutComponent, canActivate:[AuthGuard],
    children :[
      {
        path:'dashboard',
        loadChildren:() => import('./features/home/home.module').then(m => m.HomeModule )
      },
      {
        path:'salesorder',
        loadChildren:()=> import('./features/salesorder/salesorder.module').then(m => m.SalesorderModule)
      },
      {
        path:'customer',
        loadChildren:()=> import('./features/customer/customer.module').then(m => m.CustomerModule)
      },
      {
        path:'category',
        loadChildren:() => import('./features/category/category.module').then(m => m.CategoryModule)
      }, 
      {
        path:'product',
        loadChildren:() => import('./features/product/product.module').then(m => m.ProductModule)
      },
      {
        path:'monitor',
        loadChildren:() => import('./features/monitor-agent/monitor-agent.module').then(m => m.MonitorAgentModule)
      }
    ]},
  { path: 'account', component:AuthLayoutComponent, loadChildren:() => import('./features/account/account.module').then(m => m.AccountModule) },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

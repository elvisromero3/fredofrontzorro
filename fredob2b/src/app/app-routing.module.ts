import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './features/account/pages/login/login.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  {path: '', component:ContentLayoutComponent, 
    children :[
      {
        path:'dashboard',
        loadChildren:() => import('./features/home/home.module').then(m => m.HomeModule )
      },
      {
        path:'welcome',
        loadChildren:() => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)
      }
    ]},
  { path: 'account', component:AuthLayoutComponent, loadChildren:() => import('./features/account/account.module').then(m => m.AccountModule) },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

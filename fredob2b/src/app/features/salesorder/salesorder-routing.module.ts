import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './page/admin/admin.component';
import { CreateComponent } from './page/create/create.component';

const routes: Routes = [
  {
    path: '',  
      children :[
      { 
        path:'', component:AdminComponent
      },
      { path: 'new', component:CreateComponent
      }

    ]
  }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesorderRoutingModule { }

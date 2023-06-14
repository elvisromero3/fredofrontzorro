import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './page/create/create.component';
import { AdminComponent } from './page/admin/admin.component';
import { CategoryRoutingModule } from './category-routing.module';
import { NgZorroAntdModule } from 'src/app/shared/ng-zorro-antd/ng-zorro-antd.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    CategoryRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CategoryModule { }

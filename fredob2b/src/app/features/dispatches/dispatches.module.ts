import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DispatchesRoutingModule } from './dispatches-routing.module';
import { AdminComponent } from './page/admin/admin.component';
import { CreateComponent } from './page/create/create.component';
import { NgZorroAntdModule } from 'src/app/shared/ng-zorro-antd/ng-zorro-antd.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    DispatchesRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DispatchesModule { }

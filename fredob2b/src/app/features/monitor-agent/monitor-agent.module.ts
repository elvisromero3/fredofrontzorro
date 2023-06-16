import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonitorAgentRoutingModule } from './monitor-agent-routing.module';
import { AdminComponent } from './page/admin/admin.component';
import { NgZorroAntdModule } from 'src/app/shared/ng-zorro-antd/ng-zorro-antd.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    MonitorAgentRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MonitorAgentModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './pages/master/master.component';
import { HomeRoutingModule } from './home-routing.module';
import { NgZorroAntdModule } from 'src/app/shared/ng-zorro-antd/ng-zorro-antd.module';


@NgModule({
  declarations: [
    MasterComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

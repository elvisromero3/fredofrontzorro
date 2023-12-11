import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import  { NgZorroAntdModule} from '../app/shared/ng-zorro-antd/ng-zorro-antd.module';
import { ApiModule } from './services/api/fredob2b/api.module';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { PublicLayoutComponent} from './layout/public-layout/public-layout.component';
import { AuthGuard } from './shared/auth.guard';
import { ApiHeaderInterceptor } from './shared/api-header.interceptor';
import { HighchartsChartModule } from 'highcharts-angular';
import { CookieService } from 'ngx-cookie-service';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
//import { ProductCardComponent} from 'src/app/shared/components/product-card/product-card.component';
//import { CategoryComponent } from './shared/components/category/category.component';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ContentLayoutComponent,
    AuthLayoutComponent,
    PublicLayoutComponent,
  // CategoryComponent
 // ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ApiModule.forRoot({rootUrl: 'https://fredob2bapi.azurewebsites.net'}),
   // ApiModule.forRoot({rootUrl: 'http://localhost:11430'}),
    BrowserAnimationsModule,
    IconsProviderModule,
    NgZorroAntdModule,
    HighchartsChartModule,
   
  
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS, useClass: ApiHeaderInterceptor,multi: true
    },
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

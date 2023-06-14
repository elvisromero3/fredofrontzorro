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
import { AuthGuard } from './shared/auth.guard';
import { ApiHeaderInterceptor } from './shared/api-header.interceptor';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ContentLayoutComponent,
    AuthLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ApiModule.forRoot({rootUrl: 'https://fredob2bapi.azurewebsites.net/'}),
    BrowserAnimationsModule,
    IconsProviderModule,
    NgZorroAntdModule,
  
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS, useClass: ApiHeaderInterceptor,multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

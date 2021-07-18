import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN, en_US, NZ_NOTIFICATION_CONFIG } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { API_URL, UrlService } from './services/url.service';
import { environment } from 'src/environments/environment';
import { InterceptorService } from './services/interceptor.service';

registerLocaleData(en);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgZorroAntdModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, UrlService,
  { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  { provide: NZ_NOTIFICATION_CONFIG, useValue: { nzMaxStack: 1 } },
  {
    provide: API_URL,
    useValue: environment.urlPrefix
  }],
  bootstrap: [AppComponent],
})
export class AppModule { }

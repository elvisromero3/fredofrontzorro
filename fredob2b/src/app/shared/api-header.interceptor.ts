import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable()
export class ApiHeaderInterceptor implements HttpInterceptor {

  constructor(private accountService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const account = this.accountService.accountValue;
  
    if (account?.responseCode == 1){
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${account.token}` }
      })
    }
    return next.handle(request);
  }
}

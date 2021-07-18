import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';
import { Observable } from 'rxjs';
import { catchError, finalize, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(
    private message: NzMessageService) {
  }

  id = '';

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.id === '' && !request.url.includes('json')) {
      this.id = this.message.loading('please wait...', { nzDuration: 0 }).messageId;
    }
    let secureReq: HttpRequest<any> = request;
    let modifiedHeaders = new HttpHeaders();
    const token = document.cookie;
    if (token) {
      modifiedHeaders = request.headers.set('Authorization', `Bearer ${token}`);
    }
    secureReq = request.clone({
      url: request.url,
      // headers: modifiedHeaders
    });

    const started = Date.now();
    const ok = '';
    if (request.url.includes('json')) {
      return next.handle(secureReq);
    } else {
      return next.handle(secureReq)
        .pipe(
          catchError((res: HttpResponse<any>) => {
            let msg = '';
            switch (res.status) {
              case 401:
                msg = 'Identity verification expired, please re-enter the page.';
                break;
              case 200:
                msg = 'Identity verification expired, please re-enter the page.';
                break;
              case 404:
                msg = 'Endpoint address not found.';
                break;
              case 403:
                msg = 'The request contained valid data and was understood by the server, but the server is refusing action.';
                break;
              case 500:
                msg = 'An error occurred on the server, please try again';
                break;
            }
            this.showError(msg);
            return Observable.create(res);
          }),
          finalize(() => {
            // const elapsed = Date.now() - started;  // Can calculate the time consumed by the request
            // const msg = `${request.method} "${request.urlWithParams}" ${ok} in ${elapsed} ms.`;
            // console.log(msg);
          }),
          mergeMap(
            // Succeeds when there is a response; ignore other events
            (event: any) => {
              if (event.status === 200) {
                this.id = '';
                this.message.remove();
              }
              return Observable.create(observer => observer.next(event));
            }),

        );
    }
  }

  showError(message: string) {
    this.message.remove();
    this.id = '';
    this.message.error(message, { nzDuration: 2000 });
  }

}

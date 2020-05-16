import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpXsrfTokenExtractor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor{

    constructor(private tokenExtractor: HttpXsrfTokenExtractor) {}

    intercept(req: HttpRequest<any>, next: HttpHandler)
    :Observable<HttpEvent<any>> { 
        // const headerName = 'X-CSRF-TOKEN';
        // let token = this.tokenExtractor.getToken() as string;
        // if (token !== null && !req.headers.has(headerName)) {
        //   req = req.clone({ headers: req.headers.set(headerName, token) });
        // }
        let token = sessionStorage.getItem('token') ? sessionStorage.getItem('token') : '';
        req = req.clone({ headers: req.headers.set('APP-KEY', token) });
        return next.handle(req);
    }

}
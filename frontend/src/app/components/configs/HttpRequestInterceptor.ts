import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpXsrfTokenExtractor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor{

    constructor(private tokenExtractor: HttpXsrfTokenExtractor) {}

    intercept(req: HttpRequest<any>, next: HttpHandler)
    :Observable<HttpEvent<any>> { 
        console.log(req);
        // const headerName = 'X-CSRF-TOKEN';
        // let token = this.tokenExtractor.getToken() as string;
        // if (token !== null && !req.headers.has(headerName)) {
        //   req = req.clone({ headers: req.headers.set(headerName, token) });
        // }
        return next.handle(req);
    }

}
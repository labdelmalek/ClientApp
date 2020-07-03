import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';

import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest
} from '@angular/common/http';

@Injectable()
export class Interceptor implements HttpInterceptor{
    private AUTH_HEADER = "Autorization";
    private token ;
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (localStorage.getItem("token") != null &&  !(req.url.includes("renewClient")) &&  !(req.url.includes("authenticate")))
        {
          this.token = localStorage.getItem("token");
            req=this.addAuthenticationToken(req);
        }
        return next.handle(req);
    }

    private addAuthenticationToken(request: HttpRequest<any>): HttpRequest<any> {
        // If we do not have a token yet then we should not set the header.
        // Here we could first retrieve the token from where we store it.
        // if (!this.token) {
        //   return request;
        // }
        // // If you are calling an outside domain then do not add the token.
        // if (!request.url.match(/www.mydomain.com\//)) {
        //   return request;
        // }
        return request.clone({
          headers: request.headers.set(this.AUTH_HEADER, "Bearer " + this.token)
        });
      }
    }




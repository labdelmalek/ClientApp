import { Injectable } from '@angular/core';
import { Observable, throwError, BehaviorSubject } from 'rxjs';

import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    
} from '@angular/common/http';
import { map, catchError, finalize, switchMap, filter, take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class HTTPListener implements HttpInterceptor {
    private isRefreshing = false;
private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  constructor(private router : Router,private auth : AuthenticationService) {
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request).pipe(map(event => {
          return event;
      })
      , catchError(err  => {
        if (request.url.includes("renewClient") ){
            this.auth.Logout();
            return throwError(err);
        }
        if (err.status !== 401) {
          console.log("heeeeeeeeeeeeeeeeeeere");          
            return throwError(err);
        }

        if (!this.isRefreshing) {
          console.log(request.url);
            this.isRefreshing = true;
            this.refreshTokenSubject.next(null);
            return this.auth.refreshToken().pipe(
                switchMap((token: any) => {
                    this.isRefreshing = false;
                    this.refreshTokenSubject.next(token.refreshToken);
                    return next.handle(this.addToken(request,token.refreshToken));
                  }));
          }
          else {
            return this.refreshTokenSubject.pipe(
              filter(token => token != null),
              take(1),
              switchMap(jwt => {
                return next.handle(this.addToken(request, jwt));
              }));
          }
    })
      )
  }
  private addToken(request: HttpRequest<any>, token: string) {
    return request.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`
      }
    });
  }
  }



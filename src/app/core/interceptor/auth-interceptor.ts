import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';

const UNAUTHORIZED = 401;
const FORBIDDEN = 403;
const BAD_REQUEST = 400;

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        switch (error.status) {
          case BAD_REQUEST:
            alert(error.error.mensaje);
            break;
          case UNAUTHORIZED:
            this.router.navigate(['/login']);
            break;
          case FORBIDDEN:
            this.router.navigate(['/home']);
            break;
          default:
            return throwError(error);
        }
      })
    );
  }
}

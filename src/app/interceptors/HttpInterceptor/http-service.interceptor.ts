import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import {AuthService} from "../../services/auth.service";
import {CustomToastrService} from "../../services/custom-toastr.service";


@Injectable()
export class HttpServiceInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    public customToastr: CustomToastrService,
    public _auth: AuthService,
  ) {}

  handleError(error: HttpErrorResponse){
    let errorMessage = '';

    if (error instanceof HttpErrorResponse) {
      if (error.status === 401) {
        errorMessage = error.error.message;
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      }
      if (error.status === 0) {
        errorMessage = 'Failed to connect to Server. Contact System Administrator';
      }
    }
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      if(error.status === 422) {
        errorMessage = error.error.message;
      } else {
        errorMessage = `${error.error.error}` ? `${error.error.error}` : 'Server error. Contact the System Administrator';
      }

    }

    this.customToastr.showError(errorMessage, 'Error');  // Use custom toastr service

    return throwError(error);
  }


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const authToken = this._auth.getToken();


    if (authToken) {

      const modified = request.clone({
        headers: request.headers
          .set('Authorization', `Bearer ${authToken}`)
          .set('Accept', 'application/json')
          .set('Content-Type', 'application/json')
      })

      return next.handle(modified).pipe(
          tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
              // Response with HttpResponse type
            }
          },(error) => {
            this.handleError(error);
          }),
        );
      } else {
        const unauthReq = request.clone({
          headers: request.headers
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
        })
        return next.handle(unauthReq).pipe(
          tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
              // Response with HttpResponse type
            }
          },(error) => {

            this.handleError(error);
          }),
        );
      }
  }


}

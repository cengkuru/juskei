import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {AlertService} from "../../services/alertService";
import {CustomToastrService} from "../../services/custom-toastr.service";

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {

  constructor(private alertService: AlertService, public customToastr: CustomToastrService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'An error occurred';
        if (error.error instanceof ErrorEvent) {
          // Client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // Server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        this.alertService.showError( errorMessage);
        this.customToastr.showError(errorMessage, 'Error');  // Use custom toastr service
        return throwError(errorMessage);
      })
    );
  }
}

import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {AlertService} from "../../services/alertService";

@Injectable()
export class OfflineInterceptor implements HttpInterceptor {
  private offlineStatusCodes = [0, 503];

  constructor(private alertService: AlertService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (this.offlineStatusCodes.includes(error.status)) {
          this.alertService.showError('Please check your internet connection.');
        }
        return throwError(error);
      })
    );
  }
}

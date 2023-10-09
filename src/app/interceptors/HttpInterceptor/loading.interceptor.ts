import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import {finalize, Observable} from 'rxjs';
import {LoadingService} from "../../services/loading.service";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.showLoadingIndicator();

    return next.handle(request).pipe(
      finalize(() => {
        this.loadingService.hideLoadingIndicator();
      })
    );
  }
}

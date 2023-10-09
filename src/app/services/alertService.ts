import { Injectable } from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private toastr: ToastrService) { }


  showInfo(message: string) {
    this.toastr.info(message,'Info');
  }

  showSuccess(message: string) {
    this.toastr.success(message, 'Success');
  }

  showError(message: string) {
    this.toastr.error(message, 'Error');
  }
  showWarning(message: string) {
    this.toastr.warning(message, 'Warning');
  }


}

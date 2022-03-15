import { Component, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { AlertMessageService } from '../../services/alert-message/alert-message.service';
@Component({
  selector: 'alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.css'],
})
export class AlertMessageComponent implements OnDestroy {
  @Input() showAlertMessage: boolean = false;
  @Input() alertMessage: String = '';
  @Input() errorType = 'normal';

  /**
   * Subscription for getting all error messages through out the application.
   */
  alertSubscription: Subscription = this.alertMessageService?.alertMessageCallBack?.subscribe(
    (data: any) => {
      let alertData = <AlertModel>data;
      this.showAlertMessage = true;
      this.errorType = alertData?.errorType;
      this.alertMessage = alertData?.message;
    },
    (err: any) => {
      this.showAlertMessage = false;
      this.alertMessage = '';
    },
    () => {
      this.showAlertMessage = false;
      this.alertMessage = '';
    }
  );

  constructor(private alertMessageService: AlertMessageService) {}

  ngOnDestroy(): void {
    this.alertSubscription?.unsubscribe();
  }

  /**
   * Method to close alert.
   */
  closeAlert() {
    this.showAlertMessage = false;
    this.alertMessage = '';
    this.errorType = 'normal';
  }
}

/**
 * Model class for alert.
 *
 */
class AlertModel {
  message: any;
  errorType: any;
}

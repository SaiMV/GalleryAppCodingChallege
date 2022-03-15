import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class AlertMessageService {
  /**
   * Variable used for passing values between components, this is used for banner to show the message
   * in banner.
   */
  alertMessageFormat = { alertEnabled: false, isRedAlert: true, message: '' };

  /**
   * Variable used for sharing common object of observer used for sending the alert banner message.
   */
  public alertMessageCallBack = new Subject();

  /**
   * Constructor of the class
   */
  constructor() {}

  /**
   * Method used to send the alert message to other components.
   * @param alertMessage : Argument used for passing alert message.
   */
  errorCallBackMsg(alertMessage: any) {
    this.alertMessageFormat = alertMessage;
    this.alertMessageCallBack.next(this.alertMessageFormat);
  }
}

import { Injectable } from '@angular/core';
import * as emailjs from 'emailjs-com';
import { NavController } from '@ionic/angular';
import { AlertService } from './alert.service';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private navCtrl: NavController,
              private alrtService: AlertService) {}

  sendEmail(obj) {
    emailjs
      .send(obj.serviceId, obj.templateId, obj.templateParams, 'user_b7ePATwBISC3Um4pfPf3E')
      .then(data => {
        this.navCtrl.navigateForward('/');
      })
      .catch(err => {
        this.alrtService.presentErrorAlert();
      });
  }
}

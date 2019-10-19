import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder
} from '@angular/forms';
import { NavController, AlertController } from '@ionic/angular';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  detailsForm: FormGroup;
  totalPrice = 0;

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private cartService: CartService,
    private alertCtrl: AlertController
  ) {
    this.cartService.getCart().subscribe(data => {
      if (!data.length) {
        this.navCtrl.navigateForward('/');
      }
      this.totalPrice = 0;
      data.forEach(
        p => (this.totalPrice += p.discountedPrice * p.quantity)
      );
    });
  }

  ngOnInit() {
    this.detailsForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      contact: new FormControl('', [Validators.required, Validators.pattern('[789][0-9]{9}')])
    });
  }

  submitForm() {
    console.log(this.detailsForm.valid);
  }

  async presentAlertConfirm() {
    const alert = await this.alertCtrl.create({
      header: 'Confirm!',
      message: 'Order will be placed! ',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: blah => {
            console.log('Confirm Cancel: blah');
          }
        },
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
}

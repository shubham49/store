import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder
} from '@angular/forms';
import { NavController, AlertController } from '@ionic/angular';
import { CartService } from '../shared/services/cart.service';
import { Product } from '../shared/models/product';
import { EmailService } from '../shared/services/email.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  detailsForm: FormGroup;
  totalPrice = 0;
  orderDetails = '';

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private cartService: CartService,
    private emailService: EmailService
  ) {
    this.cartService.getCart().subscribe(data => {
      this.calculte(data);
    });
  }

  ngOnInit() {
    this.detailsForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      contact: new FormControl('', [
        Validators.required,
        Validators.pattern('[789][0-9]{9}')
      ])
    });
  }

  async submitForm() {
    const templateParams = {
      name: this.detailsForm.get('name').value,
      contact: this.detailsForm.get('contact').value,
      address: this.detailsForm.get('address').value,
      price: this.totalPrice,
      message: this.orderDetails
    };
    const serviceId = 'default_service';
    const templateId = 'order_store';
    this.emailService.sendEmail({
      serviceId,
      templateId,
      templateParams
    });
  }

  calculte(data: Product[]) {
    if (!data.length) {
      this.navCtrl.navigateForward('/');
    }
    this.totalPrice = 0;
    data.forEach(p => {
      this.totalPrice += p.discountedPrice * p.quantity;
      this.orderDetails += p.name + ' (' + p.quantity + '),';
    });
  }
}

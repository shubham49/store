import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/services/cart.service';
import { Product } from '../shared/models/product';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  products: Product[];
  totalPrice = 0;

  constructor(
    private cartService: CartService,
    private navCtrl: NavController
  ) {
    this.cartService.getCart().subscribe(data => {
      this.products = data;
      this.calculate();
    });
  }

  calculate() {
    if (!this.products.length) {
      this.navCtrl.navigateForward('/');
    }
    this.totalPrice = 0;
    this.products.forEach(
      p => (this.totalPrice += p.discountedPrice * p.quantity)
    );
  }

  updateItem(p: Product, by: number) {
    p.quantity += by;
    this.cartService.updateProduct(p);
  }
}

import { Component } from '@angular/core';
import { ProductService } from '../shared/services/product.service';
import { Product } from '../shared/models/product';
import { CartService } from '../shared/services/cart.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  products: Product[];

  constructor(private productService: ProductService,
              private cartService: CartService,
              private navCtrl: NavController) {
    this.products = this.productService.getProducts();
  }

  addToCart(product: Product) {
    this.cartService.shop(product);
  }

  buy(product: Product) {
    this.addToCart(product);
    this.navCtrl.navigateForward('/details');
  }
}

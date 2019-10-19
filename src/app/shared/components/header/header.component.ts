import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product';
import { NavController } from '@ionic/angular';
import { AppRoutes } from '../../constants/routes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() headerText: string;

  cartItems = 0;

  constructor(private cartService: CartService,
              private navCtrl: NavController) { }

  ngOnInit() {
    this.cartService.shopCardProduct.subscribe(data => {
      this.cartItems = 0;
      for (const p of data) {
        this.cartItems += p.quantity;
      }
    });
  }

  goToCart() {
    if (this.cartItems) {
      this.navCtrl.navigateForward('/' + AppRoutes.CART);
    }
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() headerText: string;

  products: Product[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.shopCardProduct.subscribe(data => this.products = data);
  }

  goToCart() {
    console.log('catr');
  }
}

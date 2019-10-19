import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  shopCardProduct = new Subject<Product[]>();

  products: Product[] = new Array<Product>();

  constructor() {
    this.shopCardProduct = new BehaviorSubject<Product[]>(new Array<Product>());
  }

  shop(product: Product) {
    this.products.push(product);
    this.shopCardProduct.next(this.products);
  }

  getCart(): Subject<Product[]> {
    return this.shopCardProduct;
  }
}

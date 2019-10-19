import { Injectable } from "@angular/core";
import { Product } from "../models/product";
import { Subject, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CartService {
  shopCardProduct = new Subject<Product[]>();

  products: Product[] = new Array<Product>();

  constructor() {
    this.shopCardProduct = new BehaviorSubject<Product[]>(new Array<Product>());
  }

  shop(product: Product) {
    if (this.addProductIfPresent(product)) {
      this.shopCardProduct.next(this.products);
    } else {
      product.quantity = 1;
      this.products.push(product);
      this.shopCardProduct.next(this.products);
    }
  }

  getCart(): Subject<Product[]> {
    return this.shopCardProduct;
  }

  addProductIfPresent(product: Product): boolean {
    for (const p of this.products) {
      if (p.productId === product.productId) {
        p.quantity += 1;
        return true;
      }
    }
    return false;
  }

  updateProduct(product: Product) {
    this.products.forEach((p, index) => {
      if (p.productId === product.productId) {
        if (product.quantity === 0) {
          this.products.splice(index, 1);
        } else {
          p.quantity = product.quantity;
        }
        this.shopCardProduct.next(this.products);
        return;
      }
    });
  }
}

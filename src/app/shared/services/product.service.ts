import { Injectable } from '@angular/core';
import * as products from './products.json';
import { Product } from '../models/product.js';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): Product[] {
    return products['default'];
  }

}

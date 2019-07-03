import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  public productsList: Product[] = [];

  public addProductToList(product_name: string, product_price: number, product_quantity: number ){
    this.productsList.push({
      name: product_name,
      price: product_price,
      quantity: product_quantity
    })
    return this.productsList;
  }
}

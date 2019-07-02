import { Component, OnInit } from '@angular/core';
import { Product } from '../product';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public productsList: Array<Product> = [];

  public addProductToList(product_name: string, product_price: number, product_quantity: number ): void{
    this.productsList.push({
      name: product_name,
      price: product_price,
      quantity: product_quantity
    })
  }

}

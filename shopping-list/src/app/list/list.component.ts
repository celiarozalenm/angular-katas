import { Component, OnInit } from '@angular/core';

import { Product } from '../product';

import { ProductsService } from '../products.service';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  public productList: Product[] = this.productsService.productsList;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    
  }


}


import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from '../product';

import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent implements OnInit {

  public productList: Product[] = this.productsService.productsList;
  public selectedProductName: String = this.route.snapshot.paramMap.get('productName');
  public product: Product;
  public totalPrice: Number;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.selectedProductData();
  }

  selectedProductData(): void{
    for (let i = 0; i < this.productList.length; i++){
      if (this.productList[i].name == this.selectedProductName) {
        this.product = this.productList[i];
        this.totalPrice = this.productList[i].price*this.productList[i].quantity;
      }
    }
  }

  goBack(): void {
    this.location.back();
  }

}

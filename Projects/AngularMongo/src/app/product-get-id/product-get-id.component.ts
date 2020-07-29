import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';
import Product from '../Product';

@Component({
  selector: 'app-product-get-id',
  templateUrl: './product-get-id.component.html',
  styleUrls: ['./product-get-id.component.css']
})
export class ProductGetIdComponent implements OnInit {

  product: any = {};

  constructor(private ps: ProductsService, private route: ActivatedRoute) { }

  products: Product[];

  deleteProduct(id) {
    this.ps.deleteProduct(id);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.ps.getProductId(params['id']).subscribe(res => {
        this.product = res;
    });
  });
  }

}
 
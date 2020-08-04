import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  uri = 'http://localhost:4000/products';
  uri2 = 'http://localhost:4200/products';

  constructor(private http: HttpClient) { }

  addProduct(ProductName, ProductDescription, ProductPrice) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => {
          console.log("ADDED")
          window.location.href = this.uri2
        });
  }

  getProducts() {
    return this
          .http
          .get(`${this.uri}`);
  }

  getProductId(id){
    return this
            .http
            .get(`${this.uri}/${id}`);
  }

  editProduct(id) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
  }

  updateProduct(ProductName, ProductDescription, ProductPrice, id) {
    const obj = {
      ProductName,
      ProductDescription,
      ProductPrice
    };
    this
      .http
      .post(`${this.uri}/update/${id}`, obj)
      .subscribe(res => console.log('Done'));
  }

  deleteProduct(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`)
              .subscribe( res => 
              window.location.href = this.uri2);
  }
}

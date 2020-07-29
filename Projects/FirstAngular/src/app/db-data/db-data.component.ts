import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-db-data',
  templateUrl: './db-data.component.html',
  styleUrls: ['./db-data.component.css']
})
export class DbDataComponent implements OnInit {

  constructor() {

   }

  ngOnInit() {
  }

}


export default class Product {
  ProductName: string;
  ProductDescription: string;
  ProductPrice: number;
}

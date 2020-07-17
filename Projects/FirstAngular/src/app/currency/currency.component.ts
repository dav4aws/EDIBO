import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  currencyData: any;

  constructor(private restClient:HttpClient) { }

  ngOnInit(): void {
    this.restClient.get('http://api.ratesapi.io/api/latest').subscribe(data=>this.currencyData = data);
  }

}

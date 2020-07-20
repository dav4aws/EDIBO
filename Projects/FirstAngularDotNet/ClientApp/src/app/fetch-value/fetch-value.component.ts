import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-value',
  templateUrl: './fetch-value.component.html',
  styleUrls: ['./fetch-value.component.css']
})
export class FetchValueComponent implements OnInit {
  public data : MyValues[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<MyValues[]>(baseUrl + 'myvalues').subscribe(result => {
      this.data = result;
    }, error => console.error(error));
  }

  ngOnInit() {
  }
}

interface MyValues{
  name: string;
  age: number;
  character: string;
  img: string;
}

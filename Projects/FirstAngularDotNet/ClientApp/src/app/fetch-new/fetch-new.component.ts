import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-new',
  templateUrl: './fetch-new.component.html',
  styleUrls: ['./fetch-new.component.css']
})
export class FetchNewComponent {
  public datas: FetchData[];
  http: HttpClient;


  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<FetchData[]>(baseUrl + 'api/TodoItems').subscribe(result => {
      this.datas = result;
    }, error => console.error(error)); 
  }

  public postData(){
    this.http.post<any>('http://127.0.0.1:5000/api/TodoItems', { title: 'Angular POST Request Example' }).subscribe(data => {
    this.name = data.name;
    this.

  }
  

}



interface FetchData {
  name: string;
  isComplete: string;
}


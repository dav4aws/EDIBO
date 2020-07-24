import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { stringify } from 'querystring';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-fetch-new',
  templateUrl: './fetch-new.component.html',
  styleUrls: ['./fetch-new.component.css']
})
export class FetchNewComponent {
  public datas: FetchData[];


  person = new FormGroup({
    name: new FormControl(),
    isComplete: new FormControl(true),
  });


  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<FetchData[]>(baseUrl + 'api/TodoItems').subscribe(result => {
      this.datas = result;
    }, error => console.error(error));

  }

  
  submitForm() {
    this.http.post('http://localhost:5000/api/TodoItems', this.person.value).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )

    // localStorage.setItem('person', JSON.stringify(this.person.value))
  }

}


interface FetchData {
  name: string;
  isComplete: string;
  creationTime: DatePipe;
  
}


import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-fetch-new-id',
  templateUrl: './fetch-new-id.component.html',
  styleUrls: ['./fetch-new-id.component.css']
})


export class FetchNewIdComponent{

  public datas: FetchData[];

  person = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    isComplete: new FormControl(true),
  });
  
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string, private route: ActivatedRoute) {
    http.get<FetchData[]>(baseUrl + 'api/TodoItems/' + this.route.snapshot.paramMap.get('id')).subscribe(result => {
      this.datas = result;
    }, error => console.error(error));
  }


  submitForm() { 
    this.http.put('http://localhost:5000/api/TodoItems/' + this.route.snapshot.paramMap.get('id'), this.person.value).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )

    // localStorage.setItem('person', JSON.stringify(this.person.value))
  }

}



interface FetchData{
  id: number;
  name: string;
  isComplete: string;
  creationTime: DatePipe;
}

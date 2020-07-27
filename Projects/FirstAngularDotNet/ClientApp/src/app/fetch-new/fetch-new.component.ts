import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DatePipe, DeprecatedDatePipe } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-fetch-new',
  templateUrl: './fetch-new.component.html',
  styleUrls: ['./fetch-new.component.css']
})
export class FetchNewComponent implements OnInit {
  public datas: FetchData[];

  person = new FormGroup({
    name: new FormControl(),
    isComplete: new FormControl(true),
  });


  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string, private router : Router) {
    http.get<FetchData[]>(baseUrl + 'api/TodoItems').subscribe(result => {
      this.datas = result;
      this.ngOnInit();
    }, error => console.error(error));

  }

  ngOnInit(){

  }

  submitForm() {
    this.http.post('http://localhost:5000/api/TodoItems', this.person.value).subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
    )
    
    setTimeout(function() {
      document.location.reload(true);
    }, 1000);

    // localStorage.setItem('person', JSON.stringify(this.person.value))
  }

}


interface FetchData {
  name: string;
  isComplete: string;
  creationTime: DatePipe;
  updateTime: DatePipe;
  
}


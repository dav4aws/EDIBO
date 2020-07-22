import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

person = this.loadData();

  submitForm(){
    localStorage.setItem('person', JSON.stringify(this.person));
    location.reload();
  }

  private loadData(){
    const data = localStorage.getItem('person');
    return data    
    ? JSON.parse(data)
    : { name: '' }
  }
 
}

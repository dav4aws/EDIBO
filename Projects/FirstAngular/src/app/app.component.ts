import { Component } from '@angular/core';
import { ProfileService } from './profile.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {
  person = this.loadData();
  private loadData(){
    const data = localStorage.getItem('person');
    return data    
    ? JSON.parse(data)
    : { name: '' }
  }

  constructor(public profileService: ProfileService){
  }

  vardss = this.profileService.person.name
  
}





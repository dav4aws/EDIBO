import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { LogoutService } from '../services/logout.service';
import { DateService } from '../services/date.service';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {
  constructor(public profileService: ProfileService,public logoutService: LogoutService, public dateService: DateService) { }

  name = this.profileService.person.name;
  date = this.dateService.date;

  logoutForm(){
    localStorage.setItem('person', JSON.stringify(this.logoutService.logout));
    location.reload();
  }

  ngOnInit(): void {
  }
 
}

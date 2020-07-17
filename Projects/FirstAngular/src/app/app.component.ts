import { Component } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstAngular';

  name = 'Guest';
  onEnter(name: string){ this.name = name };

  constructor(public profileService: ProfileService){

  }
}





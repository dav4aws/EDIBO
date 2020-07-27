import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Router, NavigationEnd } from '@angular/router';

interface WeatherDataRate {
  [k: string]: { [k: string]: number }
}

interface WeatherData {
  date: string;
  temperatureC: string;
  temperatureF: string;
  summary: string;
  weathers: WeatherDataRate;

}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})



export class WeatherComponent implements OnInit, OnDestroy {
  weatherData: any;
  weathers: any[];
  mySubscription;
  

  constructor(private restClient: HttpClient, private router : Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    
    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    });
    
  }

  ngOnInit(): void {
    this.restClient
      .get<WeatherData>(this.getWeatherUrl())
      .subscribe((data) => this.processData(data));
  }

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }

  processData(data: WeatherData): void {
    this.weathers = Object.entries(data)
    .map(divainiba=>({
      index: divainiba[0],
      w: divainiba[1]
    }));
  }

  getWeatherUrl(): string {
    return environment.weatherUrl
  }

  
}

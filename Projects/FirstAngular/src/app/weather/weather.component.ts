import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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

export class WeatherComponent implements OnInit {
  weatherData: any;
  weathers: any[];


  constructor(private restClient: HttpClient) {}

  ngOnInit(): void {
    this.restClient
      .get<WeatherData>(this.getWeatherUrl())
      .subscribe((data) => this.processData(data));
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

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { ImagesComponent } from './images/images.component';
import { GuisComponent } from './guis/guis.component';
import {BildesComponent } from './bildes/bildes.component';
import  {SpinnerComponent} from './spinner/spinner.component';
import { CurrencyComponent } from './currency/currency.component';
import { WeatherComponent } from './weather/weather.component';
import { DbDataComponent } from './db-data/db-data.component';


const routes: Routes = [
  {path: 'hello', component: HelloworldComponent},
  {path: 'image', component: ImagesComponent},
  {path: 'guis', component: GuisComponent},
  {path: 'bildes', component: BildesComponent},
  {path: 'spinner', component: SpinnerComponent},
  {path: 'cur', component:CurrencyComponent},
  {path: 'weather', component:WeatherComponent},
  {path: 'db-data', component:DbDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
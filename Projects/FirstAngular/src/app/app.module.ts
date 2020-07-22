import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { ImagesComponent } from './images/images.component';
import { GuisComponent } from './guis/guis.component';


import { ProfileService } from './profile.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSliderModule} from '@angular/material/slider';
import {MatDividerModule} from '@angular/material/divider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BildesComponent} from './bildes/bildes.component';
import {MatInputModule} from '@angular/material/input';
import { EmailInputComponent } from './email-input/email-input.component';
import { NavComponent } from './nav/nav.component';
import { SpinnerComponent } from './spinner/spinner.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import{CurrencyModule} from './currency/currency.module'
import { WeatherModule } from './weather/weather.module';
import { LoginComponent } from './login/login.component';
import { GreetComponent } from './greet/greet.component';



@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponent,
    ImagesComponent,
    GuisComponent,
    BildesComponent,
    EmailInputComponent,
    NavComponent,
    SpinnerComponent,
    LoginComponent,
    GreetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatListModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatRadioModule,
    MatDialogModule,
    CurrencyModule,
    WeatherModule
  ],
  providers: [
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

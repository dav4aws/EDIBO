import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { ImagesComponent } from './images/images.component';
import { GuisComponent } from './guis/guis.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSliderModule} from '@angular/material/slider';
import {MatDividerModule} from '@angular/material/divider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BildesComponent } from './bildes/bildes.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponent,
    ImagesComponent,
    GuisComponent,
    BildesComponent
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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

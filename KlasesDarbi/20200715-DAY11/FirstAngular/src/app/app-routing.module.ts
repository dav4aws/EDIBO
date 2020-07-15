import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { ImagesComponent } from './images/images.component';
import { GuisComponent } from './guis/guis.component';


const routes: Routes = [
  {path: 'hello', component: HelloworldComponent},
  {path: 'image', component: ImagesComponent},
  {path: 'guis', component: GuisComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

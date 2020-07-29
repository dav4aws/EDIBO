import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductGetComponent } from './product-get/product-get.component';
import { ProductGetIdComponent } from './product-get-id/product-get-id.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'product/create', component: ProductAddComponent},
  { path: 'edit/:id', component: ProductEditComponent },
  { path: 'products', component: ProductGetComponent  },
  { path: 'product/:id', component: ProductGetIdComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

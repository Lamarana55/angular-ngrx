import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ProductComponent} from './components/product/product.component';
import {NewProductComponent} from './components/product/new-product/new-product.component';
import {EditProductComponent} from './components/product/edit-product/edit-product.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'product', component: ProductComponent},
  {path: 'newProduct', component: NewProductComponent},
  {path: 'editProduct/:id', component: EditProductComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

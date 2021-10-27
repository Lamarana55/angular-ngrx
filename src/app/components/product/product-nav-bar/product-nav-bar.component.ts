import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {
  GetAllProductsAction,
  GetAvailableProductsAction,
  GetSelectedProductsAction,
  SearchProductsAction
} from '../../../ngrx/products.actions';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-nav-bar',
  templateUrl: './product-nav-bar.component.html',
  styleUrls: ['./product-nav-bar.component.css']
})
export class ProductNavBarComponent implements OnInit {

  constructor(private store: Store<any>, private router: Router) { }

  ngOnInit(): void {
  }

  onGetAllProducts() { 
    this.store.dispatch(new GetAllProductsAction({}));

  }

  onGetSelectedProducts() {
    this.store.dispatch(new GetSelectedProductsAction({}))
  }

  onGetAvailbelProducts() {
    this.store.dispatch(new GetAvailableProductsAction({}))

  }

  onNewProduct() {
    this.router.navigateByUrl("/newProduct");
  }

  onSearch(dataForm: any) {
    this.store.dispatch(new SearchProductsAction(dataForm.keyword))
  }
}

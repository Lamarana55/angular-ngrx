import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {ProductsState, ProductsStateEnum} from '../../ngrx/products.reducer';
import {catchError, map} from 'rxjs/operators';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productsState$: Observable<ProductsState> | null = null;
  readonly productsStateEnum = ProductsStateEnum ;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.onInit();
  }

  onInit(){
    this.productsState$ = this.store.pipe(
      map((state) => state.productsState)
    );
  }

}

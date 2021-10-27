import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProductsState, ProductsStateEnum} from '../../../ngrx/products.reducer';
import {Store} from '@ngrx/store';
import {ProductService} from '../../../services/product.service';
import {NewProductsAction, SaveProductsAction} from '../../../ngrx/products.actions';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  productFormGroup: FormGroup | null = null;
  state: ProductsState | null = null;
  readonly ProductsStateEnum = ProductsStateEnum;
  submitted: boolean = false;
  constructor(private store: Store<any>, private productService: ProductService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.onInit();
  }

  onInit(){
    this.store.dispatch(new NewProductsAction({}));
    this.store.subscribe( (myStore) => {
      this.state = myStore.productsState;
      if (myStore.productsState.dataState == ProductsStateEnum.NEW) {
        this.productFormGroup = this.formBuilder.group( {
            name: ['', [Validators.required, Validators.minLength(2)]],
            price: [0, [Validators.required, Validators.min(500)]],
            quantity: [0, [Validators.required, Validators.min(1)]],
            selected: [true, Validators.required],
            available: [true, Validators.required]
        })
      }
    })

  }

  newProduct() {
    this.productFormGroup = null;
    this.store.dispatch(new NewProductsAction({}));

  }

  onSaveProduct() {
    this.submitted = true;
    if(this.productFormGroup?.invalid) return;
    this.store.dispatch(new SaveProductsAction(this.productFormGroup?.value));
  }
}

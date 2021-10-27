import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {ProductsState, ProductsStateEnum} from '../../../ngrx/products.reducer';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EditProductsAction} from '../../../ngrx/products.actions';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productId : number;
  state: ProductsState|null = null;
  productFormGroup: FormGroup | null = null;
  submitted: boolean = false;
  readonly ProductsStateEnum = ProductsStateEnum;
  formBuilt: boolean = false;

  constructor(private activeRouter: ActivatedRoute,
              private store: Store<any>,
              private formBuilder: FormBuilder) {
    this.productId = this.activeRouter.snapshot.params.id;
  }

  ngOnInit(): void {
    this.onInit()
  }

  onInit(){
    this.store.dispatch(new EditProductsAction(this.productId));
    this.store.subscribe(state =>{
      this.state = state.productsState;
      if(this.state?.dataState == ProductsStateEnum.LOADED){
        if (this.state.currentProduct != null){
        console.log("ok")
          console.log(this.state.currentProduct)
          this.productFormGroup = this.formBuilder.group({
            id: [this.state.currentProduct.id],
            name: [this.state.currentProduct.name, [Validators.required, Validators.minLength(2)]],
            price: [this.state.currentProduct.price, [Validators.required, Validators.min(500)]],
            quantity: [this.state.currentProduct.quantity, [Validators.required, Validators.min(1)]],
            selected: [this.state.currentProduct.selected, Validators.required],
            available: [this.state.currentProduct.available, Validators.required]
          });
          this.formBuilt = true;
        }
      }
    })
  }

  onUpdateProduct() {

  }

  onUpdated() {

  }
}

import {Injectable} from '@angular/core';
import {ProductService} from '../services/product.service';
import {Observable, of} from 'rxjs';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {
  AvailableProductsActionError,
  AvailableProductsActionSuccess,
  DeleteProductsActionError,
  DeleteProductsActionSuccess, EditProductsActionError, EditProductsActionSuccess,
  GetAllProductsActionError,
  GetAllProductsActionSuccess,
  GetAvailableProductsActionError,
  GetAvailableProductsActionSuccess,
  GetSelectedProductsActionError,
  GetSelectedProductsActionSuccess,
  NewProductsActionSuccess,
  ProductsActions,
  ProductsActionsType, SaveProductsActionError,
  SaveProductsActionSuccess,
  SearchProductsActionError,
  SearchProductsActionSuccess,
  SelectProductsActionError,
  SelectProductsActionSuccess
} from './products.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {Action} from '@ngrx/store';

@Injectable()
export class ProductsEffects {

  constructor(private productService: ProductService, private effectActions: Actions) {
  }



  getAllProductsEffect: Observable<Action>=createEffect(

    () => this.effectActions.pipe(
      ofType(ProductsActionsType.GET_ALL_PRODUCTS),
      mergeMap((action) => {
        return this.productService.index().pipe(
          map((products) => new GetAllProductsActionSuccess(products)),
          catchError((err) => of(new GetAllProductsActionError(err)))
        )
      })
    )
  );

  getSelectedProductEffect: Observable<Action> = createEffect(
    ()=> this.effectActions.pipe(
      ofType(ProductsActionsType.GET_SELETECTED_PRODUCTS),
      mergeMap((action) => {
        return this.productService.getSelectedProducts().pipe(
          map( (products) => new GetSelectedProductsActionSuccess(products)),
          catchError( err => of(new GetSelectedProductsActionError(err)))
        )
      })

    )
  );

  getAvailableProductEffect: Observable<ProductsActions> = createEffect(
    ()=> this.effectActions.pipe(
      ofType(ProductsActionsType.GET_AVAILABLE_PRODUCTS),
      mergeMap((action: ProductsActions) => {
        return this.productService.getAvailableProductus().pipe(
          map( (products) => new GetAvailableProductsActionSuccess(products)),
          catchError( err => of(new GetAvailableProductsActionError(err.message)))
        )
      })

    )
  );

  searchProductEffect: Observable<ProductsActions> = createEffect(
    ()=> this.effectActions.pipe(
      ofType(ProductsActionsType.SEARCH_PRODUCT),
      mergeMap((action: ProductsActions) => {
        return this.productService.searhProducts(action.payload).pipe(
          map( (products) => new SearchProductsActionSuccess(products)),
          catchError( err => of(new SearchProductsActionError(err.message)))
        )
      })

    )
  );


  selectProductEffect: Observable<ProductsActions> = createEffect(
    ()=> this.effectActions.pipe(
      ofType(ProductsActionsType.SELECT_PRODUCT),
      mergeMap((action: ProductsActions) => {
        console.log(action.payload)
        const productPayload = {...action.payload}
        return this.productService.updateSelect(productPayload).pipe(
          map( (product) => new SelectProductsActionSuccess(product)),
          catchError( err => of(new SelectProductsActionError(err.message)))
        )
      })

    )
  );

  availableProductEffect: Observable<ProductsActions> = createEffect(
    ()=> this.effectActions.pipe(
      ofType(ProductsActionsType.AVAILABLE_PRODUCT),
      mergeMap((action: ProductsActions) => {
        const productPayload = {...action.payload}
        return this.productService.updateAvailable(productPayload).pipe(
          map( (product) => new AvailableProductsActionSuccess(product)),
          catchError( err => of(new AvailableProductsActionError(err.message)))
        )
      })

    )
  );

  deleteProductEffect: Observable<ProductsActions> = createEffect(
    ()=> this.effectActions.pipe(
      ofType(ProductsActionsType.DELETE_PRODUCT),
      mergeMap((action: ProductsActions) => {
        const productPayload = {...action.payload}
        console.log("product payload " + productPayload.name);
        return this.productService.deleteProducts(productPayload).pipe(
          map( () => new DeleteProductsActionSuccess(productPayload)),
          catchError( err => of(new DeleteProductsActionError(err.message)))
        )
      })

    )
  );

  newProductEffect: Observable<ProductsActions> = createEffect(
    ()=> this.effectActions.pipe(
      ofType(ProductsActionsType.NEW_PRODUCT),
      map((action: ProductsActions) => {
        return new NewProductsActionSuccess({})
      })
    )
  );

  saveProductEffect: Observable<ProductsActions> = createEffect(
    ()=> this.effectActions.pipe(
      ofType(ProductsActionsType.SAVE_PRODUCT),
      mergeMap((action: ProductsActions) => {
        return this.productService.save(action.payload).pipe(
          map( (product) => new SaveProductsActionSuccess(product)),
          catchError( err => of(new SaveProductsActionError(err.message)))
        )
      })
    )
  );

  editProductEffect: Observable<ProductsActions> = createEffect(
    ()=> this.effectActions.pipe(
      ofType(ProductsActionsType.EDIT_PRODUCT),
      mergeMap((action: ProductsActions) => {
        return this.productService.show(action.payload).pipe(
          map( (product) => new EditProductsActionSuccess(product)),
          catchError( err => of(new EditProductsActionError(err.message)))
        )
      })
    )
  );


}

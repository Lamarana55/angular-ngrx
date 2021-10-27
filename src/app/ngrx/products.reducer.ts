import {Product} from '../models/product.model';
import {ProductsActions, ProductsActionsType} from './products.actions';
import {Action} from '@ngrx/store';

export enum ProductsStateEnum {
  INITIAL = 'Initial',
  LOADING = 'Loading',
  LOADED = 'Loaded',
  ERROR = 'Error',
  NEW = 'New',
  EDIT = 'Edit',
  UPDATED = 'Updated'
}

export interface ProductsState {
  products: Product[],
  errorMessage: string,
  dataState: ProductsStateEnum,
  currentProduct: Product | null
}

const initState: ProductsState = {
  products: [],
  errorMessage: '',
  dataState: ProductsStateEnum.INITIAL,
  currentProduct: null

};

export function productsReducer(state = initState, action: Action): ProductsState {
  switch (action.type) {
    case ProductsActionsType.GET_ALL_PRODUCTS:
      return {...state, dataState: ProductsStateEnum.LOADING};
    case ProductsActionsType.GET_ALL_PRODUCTS_SUCCESS:
      return {...state, dataState: ProductsStateEnum.LOADED, products: (<ProductsActions>action).payload};
    case ProductsActionsType.GET_ALL_PRODUCTS_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload};

    case ProductsActionsType.GET_SELETECTED_PRODUCTS:
      return {...state, dataState: ProductsStateEnum.LOADING};
    case ProductsActionsType.GET_SELECTED_PRODUCTS_SUCCESS:
      return {...state, dataState: ProductsStateEnum.LOADED, products: (<ProductsActions>action).payload};
    case ProductsActionsType.GET_SELECTED_PRODUCTS_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload};

    case ProductsActionsType.GET_AVAILABLE_PRODUCTS:
      return {...state, dataState: ProductsStateEnum.LOADING};
    case ProductsActionsType.GET_AVAILABLE_PRODUCTS_SUCCESS:
      return {...state, dataState: ProductsStateEnum.LOADED, products: (<ProductsActions>action).payload};
    case ProductsActionsType.GET_AVAILABLE_PRODUCTS_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload};

    case ProductsActionsType.SEARCH_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING};
    case ProductsActionsType.SEARCH_PRODUCT_SUCCESS:
      return {...state, dataState: ProductsStateEnum.LOADED, products: (<ProductsActions>action).payload};
    case ProductsActionsType.SEARCH_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload};

    case ProductsActionsType.SELECT_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING};
    case ProductsActionsType.SELECT_PRODUCT_SUCCESS:
      let product: Product = (<ProductsActions>action).payload;
      let listProducts = [...state.products];
      let data: Product[] = listProducts.map(p => p.id == product.id ? product : p);
      // let newListSelected = data.filter(p=> p.selected == true);
      return {...state, dataState: ProductsStateEnum.LOADED, products: data};
    case ProductsActionsType.SELECT_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, products: (<ProductsActions>action).payload};

    case ProductsActionsType.AVAILABLE_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING};
    case ProductsActionsType.AVAILABLE_PRODUCT_SUCCESS:
      let productAvailable: Product = (<ProductsActions>action).payload;
      let listProductsAvailable = [...state.products];
      let dataAvailable: Product[] = listProductsAvailable.map(p => p.id == productAvailable.id ? productAvailable : p);
      // let newListAvailable = dataAvailable.filter(p=> p.available == true);
      return {...state, dataState: ProductsStateEnum.LOADED, products: dataAvailable};
    case ProductsActionsType.AVAILABLE_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, products: (<ProductsActions>action).payload};

    case ProductsActionsType.DELETE_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING};
    case ProductsActionsType.DELETE_PRODUCT_SUCCESS:
      let productDelete: Product = (<ProductsActions>action).payload;
      let listDelete = [...state.products];
      let index = listDelete.map((p) => {
        return p.id;
      }).indexOf(productDelete.id);
      listDelete.splice(index, 1);
      return {...state, dataState: ProductsStateEnum.LOADED, products: listDelete};
    case ProductsActionsType.DELETE_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload};

    case ProductsActionsType.NEW_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING};
    case ProductsActionsType.NEW_PRODUCT_SUCCESS:
      return {...state, dataState: ProductsStateEnum.NEW};
    case ProductsActionsType.NEW_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload};

    case ProductsActionsType.SAVE_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING};
    case ProductsActionsType.SAVE_PRODUCT_SUCCESS:
      let prods: Product[] = [...state.products];
      prods.push((<ProductsActions>action).payload);
      return {...state, dataState: ProductsStateEnum.LOADED, products: prods};
    case ProductsActionsType.SAVE_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload};

    case ProductsActionsType.EDIT_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING};
    case ProductsActionsType.EDIT_PRODUCT_SUCCESS:
      return {...state, dataState: ProductsStateEnum.LOADED, currentProduct: (<ProductsActions>action).payload};
    case ProductsActionsType.EDIT_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (<ProductsActions>action).payload};

    default:
      return {...state};
  }

}

import {Action} from '@ngrx/store';
import {Product} from '../models/product.model';

export enum ProductsActionsType {
  GET_ALL_PRODUCTS = '[Products] Get All Products',
  GET_ALL_PRODUCTS_SUCCESS = '[Products] Get All Products Success',
  GET_ALL_PRODUCTS_ERROR = '[Products] Get All Products Error',

  // Get selected product
  GET_SELETECTED_PRODUCTS = '[Products] Get selected Products',
  GET_SELECTED_PRODUCTS_SUCCESS = '[Products] Get selected Products Success',
  GET_SELECTED_PRODUCTS_ERROR = '[Products] Get selected Products Error',

  // Get Available product
  GET_AVAILABLE_PRODUCTS = '[Products] Get available Products',
  GET_AVAILABLE_PRODUCTS_SUCCESS = '[Products] Get available Products Success',
  GET_AVAILABLE_PRODUCTS_ERROR = '[Products] Get available Products Error',

  // Search Product
  SEARCH_PRODUCT = '[Products] search product ',
  SEARCH_PRODUCT_SUCCESS = '[Products] search product success',
  SEARCH_PRODUCT_ERROR = '[Products] search product error',

// Select Product
  SELECT_PRODUCT = '[Products] select product ',
  SELECT_PRODUCT_SUCCESS = '[Products] select product success',
  SELECT_PRODUCT_ERROR = '[Products] select product error',

  // Available Product
  AVAILABLE_PRODUCT = '[Products] available product ',
  AVAILABLE_PRODUCT_SUCCESS = '[Products] available product success',
  AVAILABLE_PRODUCT_ERROR = '[Products] available product error',

 // Delete Product
  DELETE_PRODUCT = '[Products] delete product ',
  DELETE_PRODUCT_SUCCESS = '[Products] delete product success',
  DELETE_PRODUCT_ERROR = '[Products] delete product error',

 // New Product
  NEW_PRODUCT = '[Products] new product ',
  NEW_PRODUCT_SUCCESS = '[Products] new product success',
  NEW_PRODUCT_ERROR = '[Products] new product error',

// Save Product
  SAVE_PRODUCT = '[Products] save product ',
  SAVE_PRODUCT_SUCCESS = '[Products] save product success',
  SAVE_PRODUCT_ERROR = '[Products] save product error',

// EDIT Product
  EDIT_PRODUCT = '[Products] edit product ',
  EDIT_PRODUCT_SUCCESS = '[Products] edit product success',
  EDIT_PRODUCT_ERROR = '[Products] edit product error',



}

// Get All
export class GetAllProductsAction implements Action {
  type: ProductsActionsType = ProductsActionsType.GET_ALL_PRODUCTS;

  constructor(public payload: any) {
  }

}

export class GetAllProductsActionSuccess implements Action {

  type: ProductsActionsType = ProductsActionsType.GET_ALL_PRODUCTS_SUCCESS;

  constructor(public payload: Product[]) {
  }

}

export class GetAllProductsActionError implements Action {

  type: ProductsActionsType = ProductsActionsType.GET_SELECTED_PRODUCTS_ERROR;

  constructor(public payload: string) {
  }

}

export class GetSelectedProductsAction implements Action {
  type: ProductsActionsType = ProductsActionsType.GET_SELETECTED_PRODUCTS;

  constructor(public payload: any) {
  }

}

export class GetSelectedProductsActionSuccess implements Action {

  type: ProductsActionsType = ProductsActionsType.GET_SELECTED_PRODUCTS_SUCCESS;

  constructor(public payload: Product[]) {
  }

}

export class GetSelectedProductsActionError implements Action {

  type: ProductsActionsType = ProductsActionsType.GET_SELECTED_PRODUCTS_ERROR;

  constructor(public payload: string) {
  }

}

export class GetAvailableProductsAction implements Action {
  type: ProductsActionsType = ProductsActionsType.GET_AVAILABLE_PRODUCTS;

  constructor(public payload: any) {
  }

}

export class GetAvailableProductsActionSuccess implements Action {

  type: ProductsActionsType = ProductsActionsType.GET_AVAILABLE_PRODUCTS_SUCCESS;

  constructor(public payload: Product[]) {
  }

}

export class GetAvailableProductsActionError implements Action {

  type: ProductsActionsType = ProductsActionsType.GET_AVAILABLE_PRODUCTS_ERROR;

  constructor(public payload: string) {
  }

}

// Search products
export class SearchProductsAction implements Action {
  type: ProductsActionsType = ProductsActionsType.SEARCH_PRODUCT;

  constructor(public payload: string) {
  }

}

export class SearchProductsActionSuccess implements Action {

  type: ProductsActionsType = ProductsActionsType.SEARCH_PRODUCT_SUCCESS;

  constructor(public payload: Product[]) {
  }

}

export class SearchProductsActionError implements Action {

  type: ProductsActionsType = ProductsActionsType.SEARCH_PRODUCT_ERROR;

  constructor(public payload: string) {
  }

}

// select products
export class SelectProductsAction implements Action {
  type: ProductsActionsType = ProductsActionsType.SELECT_PRODUCT;

  constructor(public payload: Product) {
  }

}

export class SelectProductsActionSuccess implements Action {

  type: ProductsActionsType = ProductsActionsType.SELECT_PRODUCT_SUCCESS;

  constructor(public payload: Product) {
  }

}

export class SelectProductsActionError implements Action {

  type: ProductsActionsType = ProductsActionsType.SELECT_PRODUCT_ERROR;

  constructor(public payload: string) {
  }

}


// Available  products
export class AvailableProductsAction implements Action {
  type: ProductsActionsType = ProductsActionsType.AVAILABLE_PRODUCT;

  constructor(public payload: Product) {
  }

}

export class AvailableProductsActionSuccess implements Action {

  type: ProductsActionsType = ProductsActionsType.AVAILABLE_PRODUCT_SUCCESS;

  constructor(public payload: Product) {
  }

}

export class AvailableProductsActionError implements Action {

  type: ProductsActionsType = ProductsActionsType.AVAILABLE_PRODUCT_ERROR;

  constructor(public payload: string) {
  }

}


// Delete  products
export class DeleteProductsAction implements Action {
  type: ProductsActionsType = ProductsActionsType.DELETE_PRODUCT;

  constructor(public payload: Product) {
  }

}

export class DeleteProductsActionSuccess implements Action {

  type: ProductsActionsType = ProductsActionsType.DELETE_PRODUCT_SUCCESS;

  constructor(public payload: Product) {
  }

}

export class DeleteProductsActionError implements Action {

  type: ProductsActionsType = ProductsActionsType.AVAILABLE_PRODUCT_ERROR;

  constructor(public payload: string) {
  }

}


// New  products
export class NewProductsAction implements Action {
  type: ProductsActionsType = ProductsActionsType.NEW_PRODUCT;

  constructor(public payload: any) {
  }

}

export class NewProductsActionSuccess implements Action {

  type: ProductsActionsType = ProductsActionsType.NEW_PRODUCT_SUCCESS;

  constructor(public payload: any) {
  }

}

export class  NewProductsActionError implements Action {

  type: ProductsActionsType = ProductsActionsType.NEW_PRODUCT_ERROR;

  constructor(public payload: string) {
  }

}


// Save  products
export class SaveProductsAction implements Action {
  type: ProductsActionsType = ProductsActionsType.SAVE_PRODUCT;

  constructor(public payload: Product) {
  }

}

export class SaveProductsActionSuccess implements Action {

  type: ProductsActionsType = ProductsActionsType.SAVE_PRODUCT_SUCCESS;

  constructor(public payload: Product) {
  }

}

export class  SaveProductsActionError implements Action {

  type: ProductsActionsType = ProductsActionsType.SAVE_PRODUCT_ERROR;

  constructor(public payload: string) {
  }

}

// Edit  products
export class EditProductsAction implements Action {
  type: ProductsActionsType = ProductsActionsType.EDIT_PRODUCT;

  constructor(public payload: number) {
  }

}

export class EditProductsActionSuccess implements Action {

  type: ProductsActionsType = ProductsActionsType.EDIT_PRODUCT_SUCCESS;

  constructor(public payload: Product) {
  }

}

export class  EditProductsActionError implements Action {

  type: ProductsActionsType = ProductsActionsType.EDIT_PRODUCT_ERROR;

  constructor(public payload: string) {
  }

}



export type ProductsActions =
  GetAllProductsAction |
  GetAllProductsActionSuccess |
  GetAllProductsActionError |

  GetSelectedProductsAction |
  GetSelectedProductsActionSuccess |
  GetSelectedProductsActionError |

  GetAvailableProductsAction |
  GetAvailableProductsActionSuccess |
  GetAvailableProductsActionError |

  SearchProductsAction |
  SearchProductsActionSuccess |
  SearchProductsActionError |

  SelectProductsAction |
  SelectProductsActionSuccess |
  SearchProductsActionError |

  AvailableProductsAction |
  AvailableProductsActionSuccess |
  AvailableProductsActionError |

  DeleteProductsAction |
  DeleteProductsActionSuccess |
  DeleteProductsActionError |

  NewProductsAction |
  NewProductsActionSuccess |
  NewProductsActionError |

  SaveProductsAction |
  SaveProductsActionSuccess |
  SaveProductsActionError |

  EditProductsAction |
  EditProductsActionSuccess |
  EditProductsActionError;

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../models/product.model';
import {API_URL} from '../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  index(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(API_URL + "/products")
  }

  show(id: number): Observable<Product>{
    return this.httpClient.get<Product>(API_URL + "/products/" + id)
  }

  getSelectedProducts():Observable<Product[]>{
    return this.httpClient.get<Product[]>(API_URL + "/products?selected=true")
  }

  getAvailableProductus(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(API_URL + "/products?available=true")
  }

  searhProducts(keword: string): Observable<Product[]> {
    return this.httpClient.get<Product[]>(API_URL + "/products?name_like=" + keword)
  }

  updateSelect(product: Product): Observable<Product> {
    product.selected = !product.selected
    return this.httpClient.put<Product>(API_URL + "/products/" + product.id, product)
  }

  updateAvailable(product: Product): Observable<Product> {
    product.available = !product.available
    return this.httpClient.put<Product>(API_URL + "/products/" + product.id, product)
  }

  save(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(API_URL + "/products/", product)
  }

  update(product: Product): Observable<Product> {
    return this.httpClient.put<Product>(API_URL + "/products/" + product.id, product)
  }

  deleteProducts(product: Product): Observable<any>{
    return this.httpClient.delete(API_URL + "/products/" + product.id, {responseType: 'text'})
  }

}

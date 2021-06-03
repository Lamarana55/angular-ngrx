import {Component, Input, OnInit} from '@angular/core';
import {ProductsState} from '../../../ngrx/products.reducer';
import {Product} from '../../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() state: ProductsState | null = null;
  constructor() { }

  ngOnInit(): void {
  }


}

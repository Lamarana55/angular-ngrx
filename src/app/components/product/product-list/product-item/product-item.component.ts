import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../../models/product.model';
import {Store} from '@ngrx/store';
import {AvailableProductsAction, DeleteProductsAction, SelectProductsAction} from '../../../../ngrx/products.actions';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product | null = null;

  constructor(private store: Store<any>) {
  }

  ngOnInit(): void {
  }

  onUpdate(product: Product) {

  }

  onDelete(product: Product) {
    /*let confirms = confirm('Etes vous sûr de vouloir supprimer le produit ' + product.name + ' ?');
    if (confirms) {
    }*/
      this.store.dispatch(new DeleteProductsAction(product));

  }

  onAvailable(product: Product) {
    this.store.dispatch(new AvailableProductsAction(product));
  }

  onSeleted(product: Product) {
    this.store.dispatch(new SelectProductsAction(product));
  }
}

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit, OnChanges } from '@angular/core';

import { ProductActions } from '../../core/actions/product-actions';
import { AppAllState } from '../../interfaces';
import { getProducts } from '../../core/reducers/selectors';

import { Product } from '../../core/models/product';

@Component({
  selector: 'products',
  styleUrls: ['./products.scss'],
  templateUrl: './products-temp.html'
})
export class Products implements OnInit {
  products$: Observable<any>;

  constructor(private store: Store<AppAllState>, private actions: ProductActions) {
    // Get all products for the product list component
    this.store.dispatch(this.actions.getAllProducts());
    this.products$ = this.store.select(getProducts);
  }

  ngOnInit() { }
  
}

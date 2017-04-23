import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit, OnChanges } from '@angular/core';

import { ProductActions } from '../../core/actions/product-actions';
import { AppAllState } from '../../interfaces';
import { getProducts } from '../../core/reducers/selectors';

import { Product } from '../../core/models/product';
import { ProductDummyService } from '../../core/services/product-dummy.service';

@Component({
  selector: 'products',
  styleUrls: ['./products.scss'],
  templateUrl: './products.html'
})
export class Products implements OnInit {
  //products$: Observable<any>;
  data1: any;
  data2: any;

  constructor(private store: Store<AppAllState>, private actions: ProductActions, private service: ProductDummyService) {
    // Get all products for the product list component
    this.store.dispatch(this.actions.getAllProducts());
    this.store.select(getProducts)
      .subscribe((products) => {
        this.data1 = service.getProductSimpleLineChart(products[0]);
        this.data2 = service.getProductSimpleDonutChart(products[0]);
      });
  }

  ngOnInit() { }

  getResponsive(padding, offset) {
    return this.service.getResponsive(padding, offset);
  }

}
